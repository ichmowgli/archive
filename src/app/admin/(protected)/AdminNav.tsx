import Link from "next/link";

type AdminNavProps = {
  current: "items" | "collections";
};

const links = [
  { href: "/admin", label: "Items" },
  { href: "/admin/collections", label: "Collections" },
] as const;

export default function AdminNav({ current }: AdminNavProps) {
  return (
    <nav className="mb-8 flex gap-4 border-b border-border pb-4">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`text-sm font-medium ${
            (current === "items" && href === "/admin") ||
            (current === "collections" && href === "/admin/collections")
              ? "text-primary underline underline-offset-4"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
