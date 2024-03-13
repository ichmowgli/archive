'use client';

import Item from '@/app/components/Item';
import SkeletonGrid from '@/app/components/SkeletonGrid';
import type { Item as DataItem } from '@/lib/shared';
import { useQuery } from '@tanstack/react-query';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { isPending, error, data } = useQuery<DataItem[]>({
    queryKey: ['items-data'],
    queryFn: () => fetch('/api/data?category=' + params.category).then((res) => res.json()),
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
