-- SPL schema v2. Run in Supabase SQL Editor on the chosen project.
-- Service role only for tables. Public browser never receives the service key.
create table if not exists public.audience_registrations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null, email text not null, phone text not null,
  ticket_type text not null check (ticket_type in ('general','applied_not_selected')),
  referral_code text, attendee_type text not null, company text, linkedin_url text,
  consent boolean not null, source text,
  payment_status text not null default 'pending' check (payment_status in ('pending','paid','failed','refunded')),
  unique(email)
);
create sequence if not exists public.spl_registration_number_seq;
alter table public.audience_registrations add column if not exists registration_number bigint;
-- Backfill pre-existing registrations in a stable order without changing current IDs.
with numbered as (
  select id, (select coalesce(max(registration_number), 0) from public.audience_registrations) + row_number() over(order by created_at, id) n
  from public.audience_registrations where registration_number is null
)
update public.audience_registrations a set registration_number = numbered.n from numbered where a.id = numbered.id;
select setval('public.spl_registration_number_seq', greatest(coalesce((select max(registration_number) from public.audience_registrations),0),1),
  coalesce((select max(registration_number) from public.audience_registrations),0)>0);
alter table public.audience_registrations alter column registration_number set default nextval('public.spl_registration_number_seq');
alter table public.audience_registrations alter column registration_number set not null;
create unique index if not exists audience_registration_number_unique on public.audience_registrations(registration_number);

create table if not exists public.founder_applications (
  id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(),
  full_name text not null, email text not null, phone text not null,
  startup_name text not null, one_liner text not null, stage text not null, sector text not null, city text not null,
  team_size int, video_url text not null, deck_url text, website_url text, linkedin_url text,
  consent boolean not null, source text,
  status text not null default 'submitted' check (status in ('submitted','round2','selected','not_selected','withdrawn')),
  unique(email)
);
create table if not exists public.vc_interest (
  id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(),
  full_name text not null, email text not null, phone text not null,
  firm text not null, role text not null, involvement text[] not null, focus text, check_size text,
  linkedin_url text, note text, consent boolean not null, source text, unique(email)
);
create table if not exists public.sponsor_interest (
  id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(),
  full_name text not null, email text not null, phone text not null,
  company text not null, role text not null, website_url text, interest text[] not null, goal text,
  consent boolean not null, source text, unique(email)
);
create table if not exists public.admin_users (
  id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
create table if not exists public.visitor_sessions (
  session_id uuid primary key, visitor_id uuid not null, path text not null,
  first_seen timestamptz not null default now(), last_seen timestamptz not null default now(),
  views integer not null default 0
);
create index if not exists visitor_sessions_last_seen_idx on public.visitor_sessions(last_seen desc);
create table if not exists public.page_views (
  id bigint generated always as identity primary key,
  session_id uuid not null, visitor_id uuid not null, path text not null,
  viewed_at timestamptz not null default now()
);
create index if not exists page_views_viewed_at_idx on public.page_views(viewed_at desc);

alter table public.audience_registrations enable row level security;
alter table public.founder_applications enable row level security;
alter table public.vc_interest enable row level security;
alter table public.sponsor_interest enable row level security;
alter table public.admin_users enable row level security;
alter table public.visitor_sessions enable row level security;
alter table public.page_views enable row level security;

-- Allow only the server's service-role calls to execute the functions.
create or replace function public.record_visit(p_visitor uuid, p_session uuid, p_path text, p_view boolean)
returns void language plpgsql security invoker set search_path = public as $$
begin
  insert into public.visitor_sessions(session_id, visitor_id, path, views)
  values (p_session, p_visitor, p_path, case when p_view then 1 else 0 end)
  on conflict (session_id) do update set
    last_seen = now(), path = excluded.path,
    views = visitor_sessions.views + excluded.views;
  if p_view then
    insert into public.page_views(session_id, visitor_id, path)
    values (p_session, p_visitor, p_path);
  end if;
end $$;
create or replace function public.analytics_snapshot()
returns jsonb language sql security invoker set search_path = public as $$
  select jsonb_build_object(
    'active', (select count(*) from public.visitor_sessions where last_seen > now() - interval '2 minutes'),
    'active_pages', (select coalesce(jsonb_agg(jsonb_build_object('path', path, 'count', count) order by count desc), '[]'::jsonb)
      from (select path, count(*) as count from public.visitor_sessions where last_seen > now() - interval '2 minutes' group by path) p),
    'today_views', (select count(*) from public.page_views where viewed_at >= date_trunc('day', now() at time zone 'Asia/Kolkata') at time zone 'Asia/Kolkata'),
    'today_visitors', (select count(distinct visitor_id) from public.page_views where viewed_at >= date_trunc('day', now() at time zone 'Asia/Kolkata') at time zone 'Asia/Kolkata'),
    'total_views', (select count(*) from public.page_views),
    'total_visitors', (select count(distinct visitor_id) from public.page_views),
    'daily', (select coalesce(jsonb_agg(jsonb_build_object('day', day, 'views', views, 'visitors', visitors) order by day desc), '[]'::jsonb)
      from (select (viewed_at at time zone 'Asia/Kolkata')::date as day, count(*) as views, count(distinct visitor_id) as visitors
            from public.page_views where viewed_at >= now() - interval '30 days' group by 1) d)
  )
$$;
revoke all on function public.record_visit(uuid,uuid,text,boolean) from public, anon, authenticated;
revoke all on function public.analytics_snapshot() from public, anon, authenticated;
grant execute on function public.record_visit(uuid,uuid,text,boolean) to service_role;
grant execute on function public.analytics_snapshot() to service_role;
-- Remove API schema/table grants if this project has custom public grants.
revoke all on public.admin_users, public.audience_registrations, public.founder_applications,
  public.vc_interest, public.sponsor_interest, public.visitor_sessions, public.page_views from anon, authenticated;

-- Payments migration, safe to run again after initial schema.
create sequence if not exists public.spl_paid_ticket_seq;
create sequence if not exists public.spl_test_ticket_seq;
alter table public.audience_registrations add column if not exists paid_ticket_number bigint;
alter table public.audience_registrations add column if not exists test_ticket_number bigint;
create unique index if not exists audience_paid_ticket_unique on public.audience_registrations(paid_ticket_number);
create unique index if not exists audience_test_ticket_unique on public.audience_registrations(test_ticket_number);
create table if not exists public.payment_orders (
  id uuid primary key default gen_random_uuid(),
  registration_id uuid not null references public.audience_registrations(id),
  razorpay_order_id text unique not null,
  razorpay_payment_id text unique,
  amount_paise integer not null check (amount_paise > 0),
  currency text not null default 'INR',
  mode text not null check(mode in ('test','live')),
  status text not null default 'created' check(status in ('created','paid','failed','refunded')),
  created_at timestamptz not null default now(),
  paid_at timestamptz
);
create index if not exists payment_orders_registration_idx on public.payment_orders(registration_id, created_at desc);
alter table public.payment_orders enable row level security;
revoke all on public.payment_orders from anon, authenticated;

-- Atomic and idempotent issuance: verified captured Razorpay payment only.
create or replace function public.confirm_captured_payment(p_order text, p_payment text, p_amount integer, p_mode text)
returns bigint language plpgsql security invoker set search_path=public as $$
declare o public.payment_orders%rowtype; n bigint;
begin
  select * into o from public.payment_orders where razorpay_order_id=p_order for update;
  if not found or o.amount_paise<>p_amount or o.currency<>'INR' or o.mode<>p_mode then
    raise exception 'payment order mismatch';
  end if;
  if o.status='paid' then
    if o.razorpay_payment_id<>p_payment then raise exception 'different payment on paid order'; end if;
    if o.mode='test' then select test_ticket_number into n from public.audience_registrations where id=o.registration_id;
    else select paid_ticket_number into n from public.audience_registrations where id=o.registration_id; end if;
    return n;
  end if;
  if o.status<>'created' then raise exception 'invalid payment order state'; end if;
  update public.payment_orders set status='paid', razorpay_payment_id=p_payment, paid_at=now() where id=o.id;
  if o.mode='test' then
    select test_ticket_number into n from public.audience_registrations where id=o.registration_id for update;
    if n is null then
      n:=nextval('public.spl_test_ticket_seq');
      update public.audience_registrations set test_ticket_number=n where id=o.registration_id;
    end if;
  else
    select paid_ticket_number into n from public.audience_registrations where id=o.registration_id for update;
    if n is null then
      n:=nextval('public.spl_paid_ticket_seq');
      update public.audience_registrations set paid_ticket_number=n, payment_status='paid' where id=o.registration_id;
    end if;
  end if;
  return n;
end $$;
revoke all on function public.confirm_captured_payment(text,text,integer,text) from public, anon, authenticated;
grant execute on function public.confirm_captured_payment(text,text,integer,text) to service_role;

-- Optional Google identity linkage for NEW submissions only. Run after initial schema.
alter table public.audience_registrations add column if not exists auth_user_id uuid references auth.users(id) on delete set null;
alter table public.founder_applications add column if not exists auth_user_id uuid references auth.users(id) on delete set null;
alter table public.vc_interest add column if not exists auth_user_id uuid references auth.users(id) on delete set null;
alter table public.sponsor_interest add column if not exists auth_user_id uuid references auth.users(id) on delete set null;
alter table public.visitor_sessions add column if not exists auth_user_id uuid references auth.users(id) on delete set null;
create index if not exists visitor_sessions_auth_last_seen_idx on public.visitor_sessions(auth_user_id, last_seen desc);
-- Remove the old four-argument overload first; otherwise PostgREST may see two
-- matching record_visit signatures when p_user is omitted.
drop function if exists public.record_visit(uuid,uuid,text,boolean);
create or replace function public.record_visit(p_visitor uuid, p_session uuid, p_path text, p_view boolean, p_user uuid default null)
returns void language plpgsql security invoker set search_path = public as $$
begin
  insert into public.visitor_sessions(session_id, visitor_id, path, views, auth_user_id)
  values (p_session, p_visitor, p_path, case when p_view then 1 else 0 end, p_user)
  on conflict (session_id) do update set last_seen=now(), path=excluded.path,
    views=visitor_sessions.views + excluded.views, auth_user_id=excluded.auth_user_id;
  if p_view then
    insert into public.page_views(session_id, visitor_id, path)
    values (p_session, p_visitor, p_path);
  end if;
end $$;
revoke all on function public.record_visit(uuid,uuid,text,boolean,uuid) from public, anon, authenticated;
grant execute on function public.record_visit(uuid,uuid,text,boolean,uuid) to service_role;
create or replace function public.analytics_snapshot()
returns jsonb language sql security invoker set search_path = public as $$
  select jsonb_build_object(
    'active', (select count(*) from public.visitor_sessions where last_seen > now() - interval '2 minutes'),
    'identified_online', (select coalesce(jsonb_agg(jsonb_build_object('email', email, 'path', path, 'last_seen', last_seen) order by last_seen desc), '[]'::jsonb)
      from (select u.email, s.path, max(s.last_seen) as last_seen from public.visitor_sessions s
            join auth.users u on u.id=s.auth_user_id where s.last_seen > now() - interval '2 minutes'
            group by u.id,u.email,s.path) users_online),
    'active_pages', (select coalesce(jsonb_agg(jsonb_build_object('path', path, 'count', count) order by count desc), '[]'::jsonb)
      from (select path, count(*) as count from public.visitor_sessions where last_seen > now() - interval '2 minutes' group by path) p),
    'today_views', (select count(*) from public.page_views where viewed_at >= date_trunc('day', now() at time zone 'Asia/Kolkata') at time zone 'Asia/Kolkata'),
    'today_visitors', (select count(distinct visitor_id) from public.page_views where viewed_at >= date_trunc('day', now() at time zone 'Asia/Kolkata') at time zone 'Asia/Kolkata'),
    'total_views', (select count(*) from public.page_views),
    'total_visitors', (select count(distinct visitor_id) from public.page_views),
    'daily', (select coalesce(jsonb_agg(jsonb_build_object('day', day, 'views', views, 'visitors', visitors) order by day desc), '[]'::jsonb)
      from (select (viewed_at at time zone 'Asia/Kolkata')::date as day, count(*) as views, count(distinct visitor_id) as visitors
            from public.page_views where viewed_at >= now() - interval '30 days' group by 1) d)
  )
$$;
revoke all on function public.analytics_snapshot() from public, anon, authenticated;
grant execute on function public.analytics_snapshot() to service_role;
