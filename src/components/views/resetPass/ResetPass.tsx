import React, { useEffect, useState } from "react";

import ContainerInput from "../home/form/faces/global/ContainerInput";

import { BsEnvelopeFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";
import { HiIdentification } from "react-icons/hi2";
import { BsFillEnvelopeHeartFill } from "react-icons/bs";
import { IoMdUnlock } from "react-icons/io";
import handleSubmit from "./global/enviarFormResetPass";
import Layout from "@layout";
import Header from "../home/Header";
interface ResetPassProps {}

const ResetPass: React.FC<ResetPassProps> = () => {
  const [formData, setFormData] = useState({
    email: "",
    token: "",
    password: "",
    passwordRepeat: "",
  });

  useEffect(() => {
    // Parsea la cadena de consulta de la URL
    const queryParams = new URLSearchParams(window.location.search);
    // Obtiene el valor del parámetro 'token'
    const token = queryParams.get("token");

    if (!token) {
      // Redirecciona al usuario a la página de inicio
      window.location.href = "/";
      return;
    }
    // Establece el token en el estado
    setFormData({ ...formData, token: token });
  }, []);

  const [loading, setLoading] = useState(false);
  return (
    <Layout where="reset-pass" header={<Header where="home" />}>
      <div className={`container-form-all right-active`} id="containerFormAll">
        <div className="register right" id="register">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(formData, setLoading);
            }}
          >
            <ContainerInput
              type="email"
              name="emailRegister"
              placeholder={"Email"}
              icono={<BsEnvelopeFill />}
              value={formData.email}
              valueChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <ContainerInput
              type="password"
              name="passwordRegister"
              placeholder={"Contraseña"}
              icono={<IoMdUnlock />}
              value={formData.password}
              valueChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            <ContainerInput
              type="password"
              name="passwordRepeat"
              placeholder={"Repetir Contraseña"}
              icono={<MdLock />}
              value={formData.passwordRepeat}
              valueChange={(e) =>
                setFormData({ ...formData, passwordRepeat: e.target.value })
              }
            />

            <div className="submit-container">
              <button className="submit" id="" disabled={loading}>
                activar cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ResetPass;
