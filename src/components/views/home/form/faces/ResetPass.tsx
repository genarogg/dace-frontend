import React, { useState } from "react";
import $ from "../function/$";

import ContainerInput from "./global/ContainerInput";

import { BsEnvelopeFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";
import { Icono } from "@nano";
import { IoSend } from "react-icons/io5";

interface ResetPassProps {
  cardState: (css: string) => void;
}

const ResetPass: React.FC<ResetPassProps> = ({ cardState }) => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const active = () => {
    setTimeout(() => {
      $("btnBack")?.classList.remove("active");

      const register = $("register");

      if (register) {
        register.style.display = "flex";
      }

      const reset = $("reset");
      
      if (reset) {
        reset.style.display = "none";
      }
      
    }, 600);
  };

  return (
    <div className="reset left" id="reset">
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
