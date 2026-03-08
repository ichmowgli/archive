import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <main className="min-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
