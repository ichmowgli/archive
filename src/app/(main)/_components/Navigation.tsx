function Navigation() {
  return (
    <>
      <div className="mx-3.5 flex flex-col items-end rounded-xl bg-white px-7 py-5 text-3xl text-zinc-900 md:hidden">
        <a href="#">All</a>
        <a href="#">Tech</a>
        <a href="#">Living</a>
        <a href="#">Coffee</a>
        <a href="#">Lifestyle</a>
      </div>

      <div className="hidden flex-row items-center justify-between gap-x-4 rounded-xl bg-white font-light md:flex ">
        <a href="#">All</a>
        <a href="#">Tech</a>
        <a href="#">Living</a>
        <a href="#">Coffee</a>
        <a href="#">Lifestyle</a>
      </div>
    </>
  );
}

export default Navigation;
