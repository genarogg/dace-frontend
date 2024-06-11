import { useState, useEffect } from "react";

import { ToastContainer } from "react-toastify";

import Footer from "./layout/footer/Footer";
import Spinner from "./spinner/Spinner";

import { BACKEND_URL } from "@env";
import router from "next/router";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tokenLocal = localStorage.getItem("token");

    console.log(tokenLocal);
    fetch(`${BACKEND_URL}/login/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `${tokenLocal}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          localStorage.removeItem("token");
          localStorage.removeItem("usuario");
          return;
        }
        //redireccionar el usuario con el api de nextjs
        router.push("/dashboard");

        if (window.location.pathname === "/dashboard") {
          setIsLoading(false);
        }
      });
  }, []);

  return (
    <div className={`container-all initial ${where}`}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {header}
          <main>{children}</main>
          <Footer />

          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default Layout;
