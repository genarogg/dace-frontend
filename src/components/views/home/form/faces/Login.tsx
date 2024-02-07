import React, { useState } from "react";

import ContainerInput from "./global/ContainerInput";
import CheckBox from "./global/CheckBox";

import { BsEnvelopeFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";

import HeadBtn from "./global/HeadBtn";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remenber: false,
  });

  return (
    <div className="login front">
      <HeadBtn />
      <form>
        <ContainerInput
          type="email"
          name="email"
          placeholder={"Nombre"}
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
          <button type="button">
            <span>¿Olvidaste tu contraseña?</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
