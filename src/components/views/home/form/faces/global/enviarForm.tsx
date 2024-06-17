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

  const { correo, contrasena } = formData;

  const data = {
    correo,
    contrasena,
    captcha: token,
  };

  fetch(`${BACKEND_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(data),
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

      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.infoUser));

      /* if (formData.remenber) {
      } else {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("usuario", JSON.stringify(data.infoUser));
      } */

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

      //redireccionar el usuario con el api de nextjs
      router.push("/dashboard");
    })
    .catch((error) => console.error(error));
};

export default handleSubmit;
