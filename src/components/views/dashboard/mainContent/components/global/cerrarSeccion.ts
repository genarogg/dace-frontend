import router from "next/router";


  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("usuario");
    router.push("/");
  };


export { logOut };
