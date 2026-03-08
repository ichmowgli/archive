insert into storage.buckets (id, name, public)
values ('item-images', 'item-images', true)
on conflict (id) do update set public = true;

create policy "Allow authenticated uploads to item-images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'item-images');

create policy "Allow public read item-images"
  on storage.objects for select
  to public
  using (bucket_id = 'item-images');
