'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
import { AlignJustify, X } from 'lucide-react';

import Navigation from './Navigation';

function Heading() {
  const [openNav, setOpenNav] = useState(false);
  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      <div className="m-3.5 flex flex-row items-center justify-between rounded-xl bg-white px-7	py-6">
        <h1 className="text-2xl font-medium">Archive</h1>

        <button className="md:hidden" onClick={handleOpenNav}>
          {openNav ? <X height={24} width={24} /> : <AlignJustify />}
        </button>

        <div className="hidden items-center gap-x-10 pr-7 md:flex">
          <Navigation />
          <div className="h-1 w-20 rounded-full bg-zinc-900"></div>
        </div>
      </div>

      <div className={cn('md:hidden', openNav ? 'block' : 'hidden')}>
        <Navigation />
      </div>
    </>
  );
}

export default Heading;
