import Header from './_components/Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-grey-100 flex flex-col contrast-more:bg-white">
      <Header />
      <main className="">{children}</main>
    </div>
  );
};

export default MainLayout;
