import React from 'react';

import SkeletonItem from './SkeletonItem';

function SkeletonGrid() {
  return (
    <div className="grid-items">
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
