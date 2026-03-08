drop policy if exists "Allow authenticated update" on public.items;

create policy "Allow authenticated update"
  on public.items for update
  to authenticated
  using (true)
  with check (true);
