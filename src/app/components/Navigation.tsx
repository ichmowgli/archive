import Link from "next/link";
import { usePathname } from "next/navigation";
import { Category } from "@/lib/shared";

const NAV_LINKS = [
  { title: "All", path: "/" },
  { title: Category.Workspace, path: `/categories/${Category.Workspace.toLowerCase()}` },
  { title: Category.Living, path: `/categories/${Category.Living.toLowerCase()}` },
  { title: Category.Coffee, path: `/categories/${Category.Coffee.toLowerCase()}` },
  { title: Category.Lifestyle, path: `/categories/${Category.Lifestyle.toLowerCase()}` },
  { title: Category.Personal, path: `/categories/${Category.Personal.toLowerCase()}` },
] as const;

function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <div className="mx-3.5 mb-3.5 flex flex-col items-end rounded-xl bg-white px-7 py-5 text-3xl md:hidden">
        {NAV_LINKS.map((nav) => (
          <Link
            key={nav.path}
            href={nav.path}
            className={pathname === nav.path ? "underline" : "hover:underline"}
          >
            {nav.title}
          </Link>
        ))}
      </div>

      <div className="hidden grid-cols-3 grid-rows-2 gap-x-8 text-sm font-light md:grid">
        {NAV_LINKS.map((nav) => (
          <Link
            key={nav.path}
            href={nav.path}
            className={pathname === nav.path ? "underline" : "hover:underline"}
          >
            {nav.title.toUpperCase()}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Navigation;
