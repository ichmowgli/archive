'use client';

import React from 'react';

import type { Item as DataItem } from '@/lib/shared';
import { useInfiniteQuery } from '@tanstack/react-query';
import { ArrowDown } from 'lucide-react';

import Item from '../components/Item';
import SkeletonGrid from '../components/SkeletonGrid';

export default function Home() {
  const { error, data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery<{
    data: DataItem[];
    nextCursor: number | null;
  }>({
    queryKey: ['items-data'],
    queryFn: async ({ pageParam }) => {
      const res = await fetch('/api/data?page=' + pageParam);
      return res.json();
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  if (status === 'pending') {
    return <SkeletonGrid />;
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="grid-items">
        {data.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.data.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="mb-8 flex justify-center md:mb-10">
        {hasNextPage ? (
          <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            <div className="items-center rounded-md bg-gray-50 px-4 py-1.5 hover:bg-white">
              <ArrowDown width={20} height={20} strokeWidth={1} />
            </div>
          </button>
        ) : null}
      </div>
    </>
  );
}
