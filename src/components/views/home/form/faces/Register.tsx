import React, { useState } from "react";
import HeadBtn from "./global/HeadBtn";
import ContainerInput from "./global/ContainerInput";

import { BsEnvelopeFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";
import { HiIdentification } from "react-icons/hi2";
import { BsFillEnvelopeHeartFill } from "react-icons/bs";
import { IoMdUnlock } from "react-icons/io";
interface RegisterProps {
  cardState: (css: string) => void;
}

const Register: React.FC<RegisterProps> = ({ cardState }) => {
  const [formData, setFormData] = useState({
    cedula: "",
    email: "",
    emailRepeat: "",
    password: "",
    passwordRepeat: "",
  });

  return (
    <div className="register right" id="register">
      <HeadBtn cardState={cardState} />
      <form>
        <ContainerInput
          type="text"
          name="cedula"
          placeholder={"Cedula"}
          icono={<HiIdentification />}
          value={formData.cedula}
          valueChange={(e) =>
            setFormData({ ...formData, cedula: e.target.value })
          }
        />

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
          type="email"
          name="emailRepeat"
          placeholder={"Repetir Email"}
          icono={<BsFillEnvelopeHeartFill />}
          value={formData.emailRepeat}
          valueChange={(e) =>
            setFormData({ ...formData, emailRepeat: e.target.value })
          }
        />

        <ContainerInput
          type="password"
          name="password"
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
          <button className="submit" id="">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
