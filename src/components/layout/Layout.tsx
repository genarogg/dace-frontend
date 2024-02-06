import { ToastContainer } from "react-toastify";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

export default Layout;
