-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. PROFILES (Extends auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  full_name text,
  avatar_url text,
  email text not null,
  billing_address jsonb,
  payment_method jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. TEAMS
create table public.teams (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text not null unique,
  owner_id uuid references public.profiles(id) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. TEAM MEMBERS
create type public.app_role as enum ('owner', 'member', 'viewer');

create table public.team_members (
  id uuid default uuid_generate_v4() primary key,
  team_id uuid references public.teams(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  role app_role default 'member'::public.app_role not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(team_id, user_id)
);

-- 4. SUBSCRIPTIONS (Stripe Sync)
create type public.subscription_status as enum ('active', 'trialing', 'past_due', 'canceled', 'unpaid', 'incomplete');

create table public.subscriptions (
  id text primary key, -- Stripe Subscription ID
  user_id uuid references public.profiles(id) not null,
  status public.subscription_status not null,
  metadata jsonb,
  price_id text,
  quantity integer,
  cancel_at_period_end boolean,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  current_period_start timestamp with time zone default timezone('utc'::text, now()) not null,
  current_period_end timestamp with time zone default timezone('utc'::text, now()) not null,
  ended_at timestamp with time zone default timezone('utc'::text, now()),
  cancel_at timestamp with time zone default timezone('utc'::text, now()),
  canceled_at timestamp with time zone default timezone('utc'::text, now()),
  trial_start timestamp with time zone default timezone('utc'::text, now()),
  trial_end timestamp with time zone default timezone('utc'::text, now())
);

-- RLS POLICIES

-- Profiles: Users can read/update their own profile
alter table public.profiles enable row level security;
create policy "Public profiles are viewable by everyone." on public.profiles for select using (true);
create policy "Users can insert their own profile." on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on public.profiles for update using (auth.uid() = id);

-- Teams: Users can view teams they belong to
alter table public.teams enable row level security;
create policy "Team members can view team details." on public.teams for select using (
  exists (select 1 from public.team_members where team_members.team_id = teams.id and team_members.user_id = auth.uid())
);
create policy "Owners can update teams." on public.teams for update using (auth.uid() = owner_id);
create policy "Authenticated users can create teams." on public.teams for insert with check (auth.uid() = owner_id);

-- Team Members: Strict access control
alter table public.team_members enable row level security;
create policy "Team members can view other members." on public.team_members for select using (
  exists (select 1 from public.team_members tm where tm.team_id = team_members.team_id and tm.user_id = auth.uid())
);
create policy "Team owners can manage members." on public.team_members for all using (
  exists (select 1 from public.teams where teams.id = team_members.team_id and teams.owner_id = auth.uid())
);

-- Subscriptions: Users view their own
alter table public.subscriptions enable row level security;
create policy "Users can view own subscriptions." on public.subscriptions for select using (auth.uid() = user_id);

-- TRIGGERS
-- Auto-create profile on signup
create function public.handle_new_user() returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url, email)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url', new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();