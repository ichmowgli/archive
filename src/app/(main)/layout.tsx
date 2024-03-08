import Header from './_components/Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="">{children}</main>
    </div>
  );
};

export default MainLayout;
