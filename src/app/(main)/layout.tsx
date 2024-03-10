import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col  ">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
