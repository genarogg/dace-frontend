import React, { useState } from "react";

import ContainerInput from "./global/ContainerInput";
import CheckBox from "./global/CheckBox";

import { BsEnvelopeFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";

import HeadBtn from "./global/HeadBtn";
import { HiIdentification } from "react-icons/hi2";
import { BsFillEnvelopeHeartFill } from "react-icons/bs";
import { MdOutlineLock } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";
interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const [formData, setFormData] = useState({
    cedula: 0,
    email: "",
    emailRepeat: "",
    password: "",
    passwordRepeat: "",
  });

  return (
    <div className="register right">
      <HeadBtn />
      <form>
        <ContainerInput
          type="number"
          name="cedula"
          placeholder={"Cedula"}
          icono={<HiIdentification />}
          value={formData.cedula}
          valueChange={(e) =>
            setFormData({ ...formData, cedula: Number(e.target.value) })
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
          placeholder={"Repetir Email"}
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
