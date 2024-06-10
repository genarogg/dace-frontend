import { ToastContainer } from "react-toastify";

import Footer from "./layout/footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
  where?: string;
  header: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  header,
  where = "",
}) => {
  return (
    <>
      <div className={`container-all initial ${where}`}>
        {header}
        <main>{children}</main>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};

export default Layout;
