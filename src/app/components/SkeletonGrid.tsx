import React from 'react';

import SkeletonItem from './SkeletonItem';

function SkeletonGrid() {
  return (
    <div className="mx-3.5 flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </div>
  );
}

export default SkeletonGrid;
