import React, { useState } from "react";

import ContainerInput from "./global/ContainerInput";
import CheckBox from "./global/CheckBox";

import { BsEnvelopeFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";

import HeadBtn from "./global/HeadBtn";

import $ from "../function/$";
interface LoginProps {
  cardState: (css: string) => void;
}

const Login: React.FC<LoginProps> = ({ cardState }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remenber: false,
  });

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
      <form>
        <ContainerInput
          type="email"
          name="email"
          placeholder={"Email"}
          icono={<BsEnvelopeFill />}
          value={formData.email}
          valueChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <ContainerInput
          type="password"
          name="password"
          placeholder={"Contraseña"}
          icono={<MdLock />}
          value={formData.password}
          valueChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <CheckBox
          valueChange={(e) =>
            setFormData({ ...formData, remenber: e.target.checked })
          }
        />

        <div className="submit-container">
          <button className="submit" id="">
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
