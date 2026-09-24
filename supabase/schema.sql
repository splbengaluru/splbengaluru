-- SPL forms schema. Run once in Supabase: SQL Editor > New query > paste > Run.
-- Row Level Security is ON with no public policies: only the server (service role key) can read/write.

create table if not exists audience_registrations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null, email text not null, phone text not null,
  ticket_type text not null check (ticket_type in ('general','applied_not_selected')),
  referral_code text, attendee_type text not null, company text, linkedin_url text,
  consent boolean not null, source text,
  payment_status text not null default 'pending' check (payment_status in ('pending','paid','failed','refunded')),
  unique (email)
);

create table if not exists founder_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null, email text not null, phone text not null,
  startup_name text not null, one_liner text not null, stage text not null, sector text not null, city text not null,
  team_size int, video_url text not null, deck_url text, website_url text, linkedin_url text,
  consent boolean not null, source text,
  status text not null default 'submitted' check (status in ('submitted','round2','selected','not_selected','withdrawn')),
  unique (email)
);

create table if not exists vc_interest (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null, email text not null, phone text not null,
  firm text not null, role text not null, involvement text[] not null, focus text, check_size text,
  linkedin_url text, note text, consent boolean not null, source text,
  unique (email)
);

create table if not exists sponsor_interest (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null, email text not null, phone text not null,
  company text not null, role text not null, website_url text, interest text[] not null, goal text,
  consent boolean not null, source text,
  unique (email)
);

alter table audience_registrations enable row level security;
alter table founder_applications enable row level security;
alter table vc_interest enable row level security;
alter table sponsor_interest enable row level security;
