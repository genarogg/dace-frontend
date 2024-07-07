// handleSubmit.js
import { notify } from "@nano";

import { BACKEND_URL } from "@env";

const handleSubmit = async (
  executeRecaptcha: any,

  formData: any,
  setLoading: any
) => {
  setLoading(true);

  if (!executeRecaptcha) {
    return;
  }

  const token = await executeRecaptcha("resetPass");

  const { email: correo } = formData;

  if (!correo) {
    notify({ message: "El email es obligatorio", type: "error" });
    setLoading(false);
    return;
  }

  const data = {
    correo,
    captcha: token,
  };

  fetch(`${BACKEND_URL}/auth/sendResetPass`, {
    method: "POST",
    body: JSON.stringify(data),
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
    })
    .catch((error) => console.error(error));
};

export default handleSubmit;
