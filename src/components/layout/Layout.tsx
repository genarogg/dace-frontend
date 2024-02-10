import { ToastContainer } from "react-toastify";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
  where?: string;
}

import { MdOutlineLock } from "react-icons/md";

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  where = " ",
}) => {
  return (
    <>
      <div className={`container-all ${where}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};

export default Layout;
