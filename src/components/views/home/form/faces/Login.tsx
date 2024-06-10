import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import ContainerInput from "./global/ContainerInput";
import CheckBox from "./global/CheckBox";

import { BsEnvelopeFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";

import HeadBtn from "./global/HeadBtn";

import $ from "../function/$";

import handleSubmit from "./global/enviarForm";
interface LoginProps {
  cardState: (css: string) => void;
}

const Login: React.FC<LoginProps> = ({ cardState }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    correo: "",
    contrasena: "",
    captcha: "",
    remenber: false,
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const active = () => {
    $("btnBack")?.classList.add("active");

    const register = $("register");

    if (register) {
      register.style.display = "none";
    }

    const reset = $("reset");

    if (reset) {
      reset.style.display = "flex";
    }
  };

  return (
    <div className="login front">
      <HeadBtn cardState={cardState} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(executeRecaptcha, setFormData, formData, setLoading);
        }}
      >
        <ContainerInput
          type="email"
          name="email"
          placeholder={"Email"}
          icono={<BsEnvelopeFill />}
          value={formData.correo}
          valueChange={(e) =>
            setFormData({ ...formData, correo: e.target.value })
          }
        />
        <ContainerInput
          type="password"
          name="passwordLogin"
          placeholder={"Contraseña"}
          icono={<MdLock />}
          value={formData.contrasena}
          valueChange={(e) =>
            setFormData({ ...formData, contrasena: e.target.value })
          }
        />

        <CheckBox
          valueChange={(e) =>
            setFormData({ ...formData, remenber: e.target.checked })
          }
        />

        <div className="submit-container">
          <button className="submit" id="" disabled={loading}>
            Acceder
          </button>
        </div>

        <div className="container-recovery">
          <button
            type="button"
            onClick={() => {
              active();
              cardState("left-active");
            }}
          >
            <span>¿Olvidaste tu contraseña?</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
