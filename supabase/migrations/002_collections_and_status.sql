-- Collections: named lists for the public site (e.g. Featured, Gift ideas)
create table if not exists public.collections (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  sort_order int not null default 0,
  created_at timestamptz default now() not null
);

alter table public.collections enable row level security;

create policy "Allow public read on collections"
  on public.collections for select using (true);

create policy "Allow authenticated full access on collections"
  on public.collections for all
  using (auth.role() = 'authenticated');

-- Items: add status (active = visible, archived = hidden) and optional collection
alter table public.items
  add column if not exists status text not null default 'active'
    check (status in ('active', 'archived')),
  add column if not exists collection_id uuid references public.collections (id) on delete set null;

create index if not exists items_status_idx on public.items (status);
create index if not exists items_collection_id_idx on public.items (collection_id);

-- Restrict public read to active items only (drop old policy, create new one)
drop policy if exists "Allow public read access on items" on public.items;

create policy "Allow public read active items only"
  on public.items for select
  using (status = 'active');
