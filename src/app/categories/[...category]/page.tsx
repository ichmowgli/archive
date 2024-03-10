'use client';

import type { Item as DataItem } from '@/app/api/data/route';
import Item from '@/app/components/Item';
import SkeletonGrid from '@/app/components/SkeletonGrid';
import SkeletonItem from '@/app/components/SkeletonItem';
import { Skeleton } from '@/components/ui/skeleton';
import { useQuery } from '@tanstack/react-query';

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
    <p>content </p>
  );
}
