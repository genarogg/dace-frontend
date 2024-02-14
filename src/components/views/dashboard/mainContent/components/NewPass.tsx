import React, { useState } from "react";

import ContainerInput from "@form/ContainerInput";
import { MdLock } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";

import BannerPosition from "./global/BannerPosition";

interface NewPassProps {}

const NewPass: React.FC<NewPassProps> = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    password: "",
    passwordRepeat: "false",
  });

  return (
    <>
      <BannerPosition title="Cambiar Contraseña"/>
      <div className="new-pass-container login front">
        <form>
          <ContainerInput
            type="password"
            name="oldPassword"
            placeholder={"Contraseña antigua"}
            icono={<IoMdUnlock />}
            value={formData.oldPassword}
            valueChange={(e) =>
              setFormData({ ...formData, oldPassword: e.target.value })
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
              Acceder
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPass;
