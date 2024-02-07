import React, { useState } from "react";

import ContainerInput from "./global/ContainerInput";

import { BsEnvelopeFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";
import { Icono } from "@nano";
import { IoSend } from "react-icons/io5";
import $ from "../function/$";

interface ResetPassProps {
  cardState: (css: string) => void;
}

const ResetPass: React.FC<ResetPassProps> = ({ cardState }) => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const active = () => {
    $("btnBack")?.classList.remove("active");
  };

  return (
    <div className="reset left">
      <div className="title">
        <button
          id="btnBack"
          onClick={() => {
            active();
            cardState("front-active");
          }}
        >
          <Icono icono={<FaArrowLeft />} />
        </button>

        <p>Restablecer la contraseña</p>

        <hr className="titleHr" />
      </div>
      <form>
        <div className="container-reset">
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
          <button onClick={() => {}}>
            <Icono icono={<IoSend />} />
          </button>
        </div>

        <div className="text-recovery">
          <span>
            Ingrese el correo con el que se registro, Y se Te enviará un enlace
            con el que podrá restablecer su contraseña.
          </span>
        </div>
      </form>
    </div>
  );
};

export default ResetPass;
