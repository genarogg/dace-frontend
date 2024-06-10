import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { Bounce, toast } from "react-toastify";

import ContainerInput from "./global/ContainerInput";
import CheckBox from "./global/CheckBox";

import { BsEnvelopeFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";

import HeadBtn from "./global/HeadBtn";

import { BACKEND_URL } from "@env";

import $ from "../function/$";
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (!executeRecaptcha) {
      return;
    }

    const token = await executeRecaptcha("login");

    setFormData((prevState) => ({
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

        localStorage.setItem("token", data.token);

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
      })
      .catch((error) => console.error(error));
  };

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
      <form onSubmit={handleSubmit}>
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
          name="password"
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
