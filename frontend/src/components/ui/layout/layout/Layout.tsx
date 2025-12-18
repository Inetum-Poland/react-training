import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/Main";
import Sidebar from "../sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      <div className="flex flex-1">
        <Sidebar />
        <Main>
          <Header />
          <Breadcrumbs />
          <div className="flex flex-col flex-1 px-6 py-6">{children}</div>

          <Footer>Actions panel section</Footer>
        </Main>
      </div>
    </div>
  );
}
