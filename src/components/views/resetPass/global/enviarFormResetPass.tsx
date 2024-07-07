// handleSubmit.js
import { notify } from "@nano";

import { BACKEND_URL } from "@env";

import router from "next/router";

const handleSubmit = async (formData: any, setLoading: any) => {
  setLoading(true);

  const {
    email: correo,
    password: contrasena,
    passwordRepeat,
    token,
  } = formData;

  if (!correo || !contrasena || !passwordRepeat) {
    notify({ message: "Todos los campos son obligatorios", type: "error" });
    setLoading(false);
    return;
  }

  if (contrasena !== passwordRepeat) {
    notify({ message: "Las contraseñas no coinciden", type: "error" });
    setLoading(false);
    return;
  }

  //revisa que las contraseña tenga al menos 8 caracteres, una mayuscula y alfanumerico
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!regex.test(contrasena)) {
    notify({
      message:
        "La contraseña debe tener al menos 8 caracteres, una mayúscula y un número",
      type: "error",
    });
    setLoading(false);
    return;
  }

  fetch(`${BACKEND_URL}/auth/resetPass`, {
    method: "PUT",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setLoading(false);

      console.log(data);

      if (data.error) {
        notify({ message: data.error, type: "error" });
        return;
      }

      notify({ message: data.mensaje, type: "success" });

      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.infoUser));

      //redireccionar el usuario con el api de nextjs
      router.push("/dashboard");
    })
    .catch((error) => console.error(error));
};

export default handleSubmit;
