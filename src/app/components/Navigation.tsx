function Navigation() {
  const navigation = [
    { title: 'All', path: '/' },
    { title: 'Tech', path: '/categories/tech' },
    { title: 'Living', path: '/categories/living' },
    { title: 'Coffee', path: '/categories/coffee' },
    { title: 'Lifestyle', path: '/categories/lifestyle' },
    { title: 'Personal', path: '/categories/personal' },
  ];
  return (
    <>
      <div className="mx-3.5 mb-3.5 flex flex-col items-end rounded-xl bg-white px-7 py-5 text-3xl text-zinc-900 md:hidden">
        {navigation.map((nav, index) => (
          <a className="hover:underline" key={index} href={nav.path}>
            {nav.title}
          </a>
        ))}
      </div>

      <div className="hidden grid-cols-3 grid-rows-2 gap-x-8 text-sm font-light md:grid">
        {navigation.map((nav, index) => (
          <a key={index} className="hover:underline" href={nav.path}>
            {nav.title.toUpperCase()}
          </a>
        ))}
      </div>
    </>
  );
}

export default Navigation;
