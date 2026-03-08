create policy "Allow authenticated read all items"
  on public.items for select
  using (auth.role() = 'authenticated');
