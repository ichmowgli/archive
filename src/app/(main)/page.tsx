'use client';

import { useQuery } from '@tanstack/react-query';

import type { Item as DataItem } from '../api/data/route';
import Item from './_components/Item';

export default function Home() {
  const { isPending, error, data } = useQuery<DataItem[]>({
    queryKey: ['items-data'],
    queryFn: () => fetch('/api/data').then((res) => res.json()),
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="product-grid mx-3.5 flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
