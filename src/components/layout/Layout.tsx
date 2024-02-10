import { ToastContainer } from "react-toastify";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
  where?: string;
}



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
