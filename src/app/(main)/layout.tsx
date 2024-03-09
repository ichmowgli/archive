import Header from './_components/Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
