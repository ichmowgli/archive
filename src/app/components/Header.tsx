"use client";

import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

import Navigation from "./Navigation";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      <div className="wrapper-y px-7	py-6">
        <h1 className="text-3xl font-medium uppercase">Archive</h1>
        <button
          type="button"
          className="md:hidden"
          onClick={handleOpenNav}
          aria-label={openNav ? "Close menu" : "Open menu"}
        >
          {openNav ? <X height={24} width={24} /> : <AlignJustify />}
        </button>

        <div className="hidden items-center gap-x-16 md:flex">
          <Navigation />
          <div className="h-1 w-32 rounded-full bg-zinc-900"></div>
        </div>
      </div>

      <div
        className={cn("md:hidden", {
          hidden: !openNav,
        })}
      >
        <Navigation />
      </div>
    </>
  );
}

export default Header;
