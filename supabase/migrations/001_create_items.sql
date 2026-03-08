-- Items table for archive CMS (admin-managed)
create table if not exists public.items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  price numeric not null,
  currency text not null default 'EUR',
  company text not null,
  category text not null,
  image text not null,
  href text not null,
  created_at timestamptz default now() not null
);

-- Public read for the main site / API
alter table public.items enable row level security;

create policy "Allow public read access on items"
  on public.items for select
  using (true);

-- Only authenticated users can insert/update/delete (admin check in app via ADMIN_ALLOWED_EMAIL)
create policy "Allow authenticated insert"
  on public.items for insert
  with check (auth.role() = 'authenticated');

create policy "Allow authenticated update"
  on public.items for update
  using (auth.role() = 'authenticated');

create policy "Allow authenticated delete"
  on public.items for delete
  using (auth.role() = 'authenticated');

-- Index for listing by category
create index if not exists items_category_idx on public.items (category);
