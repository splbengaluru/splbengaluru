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
