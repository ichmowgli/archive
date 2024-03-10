'use client';

import type { Item as DataItem } from '@/app/api/data/route';
import Item from '@/app/components/Item';
import SkeletonGrid from '@/app/components/SkeletonGrid';
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
    <div className="mx-3.5 flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
