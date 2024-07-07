import React, { useState } from "react";
import HeadBtn from "./global/HeadBtn";
import ContainerInput from "./global/ContainerInput";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { BsEnvelopeFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";
import { HiIdentification } from "react-icons/hi2";
import { BsFillEnvelopeHeartFill } from "react-icons/bs";
import { IoMdUnlock } from "react-icons/io";
import handleSubmit from "./global/enviarFormActive";

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

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [loading, setLoading] = useState(false);
  return (
    <div className="register right" id="register">
      <HeadBtn cardState={cardState} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(executeRecaptcha, formData, setLoading);
        }}
      >
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
          name="emailRegister"
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
  );
};

export default Register;
