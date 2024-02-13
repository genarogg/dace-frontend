import { ToastContainer } from "react-toastify";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

interface LayoutProps {
  children: React.ReactNode;
  where?: string;
}

const queryClient = new QueryClient();

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  where = "",
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`container-all initial ${where}`}>
        <Header where={where} />
        <main>{children}</main>
        <Footer />
      </div>
      <ToastContainer />
    </QueryClientProvider>
  );
};

export default Layout;
