import { Category } from '@/lib/shared';
import { usePathname } from 'next/navigation';

function Navigation() {
  const pathname = usePathname();

  const navigation = [
    { title: 'All', path: '/' },
    { title: Category.Workspace, path: `/categories/${Category.Workspace.toLowerCase()}` },
    { title: Category.Living, path: `/categories/${Category.Living.toLowerCase()}` },
    { title: Category.Coffee, path: `/categories/${Category.Coffee.toLowerCase()}` },
    { title: Category.Lifestyle, path: `/categories/${Category.Lifestyle.toLowerCase()}` },
    { title: Category.Personal, path: `/categories/${Category.Personal.toLowerCase()}` },
  ];
  return (
    <>
      <div className="mx-3.5 mb-3.5 flex flex-col items-end rounded-xl bg-white px-7 py-5 text-3xl md:hidden">
        {navigation.map((nav, index) => {
          const isActive = pathname === nav.path;

          return (
            <a className={isActive ? 'underline' : 'hover:underline'} key={index} href={nav.path}>
              {nav.title}
            </a>
          );
        })}
      </div>

      <div className="hidden grid-cols-3 grid-rows-2 gap-x-8 text-sm font-light md:grid">
        {navigation.map((nav, index) => {
          const isActive = pathname === nav.path;
          return (
            <a key={index} className={isActive ? 'underline' : 'hover:underline'} href={nav.path}>
              {nav.title.toUpperCase()}
            </a>
          );
        })}
      </div>
    </>
  );
}

export default Navigation;
