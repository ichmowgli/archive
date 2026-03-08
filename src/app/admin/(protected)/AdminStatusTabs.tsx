"use client";

import { motion } from "motion/react";
import Link from "next/link";

type StatusTab = "all" | "active" | "archived";

const TABS: { tab: StatusTab; href: string; label: string }[] = [
  { tab: "all", href: "/admin", label: "All" },
  { tab: "active", href: "/admin?status=active", label: "Active" },
  { tab: "archived", href: "/admin?status=archived", label: "Archived" },
];

export default function AdminStatusTabs({ current }: { current: StatusTab }) {
  return (
    <div className="relative mb-3 flex gap-1 rounded-md border border-border p-1">
      {TABS.map(({ tab, href, label }) => (
        <Link
          key={tab}
          href={href}
          className="relative z-10 rounded px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-muted/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 "
        >
          {current === tab && (
            <motion.span
              layoutId="admin-status-pill"
              className="absolute inset-0 z-0 rounded-md bg-primary"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            />
          )}
          <span
            className={`relative z-10 ${current === tab ? "text-primary-foreground" : "text-muted-foreground"}`}
          >
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
}
