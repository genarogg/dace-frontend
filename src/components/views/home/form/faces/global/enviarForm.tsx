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

  setFormData((prevState: any) => ({
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

      if (formData.remenber) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
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

      console.log(data.usuario);

      //redireccionar el usuario con el api de nextjs
      router.push("/dashboard");
    })
    .catch((error) => console.error(error));
};

export default handleSubmit;
