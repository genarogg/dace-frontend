import { ToastContainer } from "react-toastify";

import Footer from "./layout/footer/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

interface LayoutProps {
  children: React.ReactNode;
  where?: string;
  header: React.ReactNode;
}

const queryClient = new QueryClient();

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  header,
  where = "",
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`container-all initial ${where}`}>
        {header}
        <main>{children}</main>
        <Footer />
      </div>
      <ToastContainer />
    </QueryClientProvider>
  );
};

export default Layout;
