'use client';

import type { Item as DataItem } from '@/lib/shared';
import { useQuery } from '@tanstack/react-query';

import Item from '../components/Item';
import SkeletonGrid from '../components/SkeletonGrid';

export default function Home() {
  const { isPending, error, data } = useQuery<DataItem[]>({
    queryKey: ['items-data'],
    queryFn: () => fetch('/api/data').then((res) => res.json()),
  });

  if (isPending) {
    return <SkeletonGrid />;
  }
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid-items">
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
