"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import Item from "@/app/components/Item";
import Pager from "@/app/components/Pager";
import SkeletonGrid from "@/app/components/SkeletonGrid";
import type { Item as DataItem } from "@/lib/shared";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = React.use(params);
  const { error, data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery<{
    data: DataItem[];
    nextCursor: number | null;
  }>({
    queryKey: ["items-data", category],
    queryFn: async ({ pageParam }) => {
      const res = await fetch(`/api/data?category=${category}&page=${pageParam}`);
      return res.json();
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  if (status === "pending") {
    return <SkeletonGrid />;
  }
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="grid-items">
        {data.pages.map((page, i) => (
          <React.Fragment key={page.data[0]?.id ?? `page-${i}`}>
            {page.data.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <Pager
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
      />
    </div>
  );
}
