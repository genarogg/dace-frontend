// handleSubmit.js
import { toast, Bounce } from "react-toastify";

import { BACKEND_URL } from "@env";
import router from "next/router";

const handleSubmit = async (
  executeRecaptcha: any,
  setFormData: any,
  formData: any,
  setLoading: any
) => {
  setLoading(true);

  if (!executeRecaptcha) {
    return;
  }

  const token = await executeRecaptcha("login");

  await setFormData((prevState: any) => ({
    ...prevState,
    captcha: token,
  }));

  fetch(`${BACKEND_URL}/login`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setLoading(false);

      if (data.error) {
        toast.error(data.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return;
      }

      //resetear el info
      /* localStorage.removeItem("token");
      localStorage.removeItem("usuario"); */

      if (formData.remenber) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("usuario", JSON.stringify(data.infoUser));
      } else {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("usuario", JSON.stringify(data.infoUser));
      }

      toast.success(data.mensaje, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      console.log(data.infoUser);

      //redireccionar el usuario con el api de nextjs
      /* router.push("/dashboard"); */
    })
    .catch((error) => console.error(error));
};

export default handleSubmit;
