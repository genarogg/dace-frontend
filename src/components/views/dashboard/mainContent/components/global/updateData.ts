// updateData.ts
import { toast, Bounce } from "react-toastify";

import { BACKEND_URL } from "@env";

function isPasswordAlphanumeric(password: string): boolean {
  const alphanumericRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
  return alphanumericRegex.test(password);
}

const updateData = (formData: any) => {
  if (formData.password) {
    if (formData.password !== formData.passwordRepeat) {
      toast.error("Las contraseñas no coinciden", {
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

    if (!isPasswordAlphanumeric(formData.password)) {
      console.log(formData);
      toast.error("La contraseña debe ser alfanumérica", {
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
  }

  const token = localStorage.getItem("token");
  
  fetch(`${BACKEND_URL}/usuario/data`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `${token}`,
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

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

      toast.success(data.message, {
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
    });
};

export default updateData;
