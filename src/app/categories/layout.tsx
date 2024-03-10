import Footer from '../components/Footer';
import Header from '../components/Header';

const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col  ">
      <Header />
      <main className="h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default CategoriesLayout;
