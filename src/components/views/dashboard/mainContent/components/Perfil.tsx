import React, { useState, useEffect } from "react";
import ContainerInput from "@form/ContainerInput";
import BannerPosition from "./global/BannerPosition";

import updateData from "./global/updateData";

import {
  BsEnvelopeFill,
  BsFillCalendar2HeartFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";

import {
  RiUser2Fill,
  RiUser2Line,
  RiUser3Fill,
  RiUser3Line,
} from "react-icons/ri";

import { FaMobileRetro, FaVenusMars, FaMapPin } from "react-icons/fa6";

import Select from "@form/Select";

import { BACKEND_URL } from "@env";
import { Bounce, toast } from "react-toastify";

interface UserDataProps {}

const UserData: React.FC<UserDataProps> = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    secondName: "",
    firstSurname: "",
    secondSurname: "",
    birthdate: "",
    direction: "",
    phoneNumber: "",
    sex: "",
    parroquia: "",
    etnia: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    fetch(`${BACKEND_URL}/usuario/data`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
      });
  }, []);

  return (
    <>
      <BannerPosition title="Cambiar Informacion" />
      <div className="perfil new-pass-container login front">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateData(formData);
          }}
        >
          <ContainerInput
            type="email"
            name="email"
            icono={<BsEnvelopeFill />}
            placeholder={"Email"}
            value={formData.email}
            hasContentState={true}
            valueChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <ContainerInput
            type="tel"
            name="phoneNumber"
            placeholder={"Número de Teléfono"}
            value={formData.phoneNumber}
            icono={<FaMobileRetro />}
            hasContentState={true}
            valueChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />

          <ContainerInput
            type="text"
            name="firstName"
            placeholder={"Primer Nombre"}
            value={formData.firstName}
            icono={<RiUser2Fill />}
            hasContentState={true}
            valueChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <ContainerInput
            type="text"
            name="secondName"
            placeholder={"Segundo Nombre"}
            value={formData.secondName}
            icono={<RiUser2Line />}
            hasContentState={true}
            valueChange={(e) =>
              setFormData({ ...formData, secondName: e.target.value })
            }
          />
          <ContainerInput
            type="text"
            name="firstSurname"
            placeholder={"Primer Apellido"}
            value={formData.firstSurname}
            icono={<RiUser3Fill />}
            hasContentState={true}
            valueChange={(e) =>
              setFormData({ ...formData, firstSurname: e.target.value })
            }
          />
          <ContainerInput
            type="text"
            name="secondSurname"
            placeholder={"Segundo Apellido"}
            value={formData.secondSurname}
            icono={<RiUser3Line />}
            hasContentState={true}
            valueChange={(e) =>
              setFormData({ ...formData, secondSurname: e.target.value })
            }
          />
          <ContainerInput
            type="date"
            name="birthdate"
            icono={<BsFillCalendar2HeartFill />}
            placeholder={"Fecha de Nacimiento"}
            value={formData.birthdate}
            hasContentState={true}
            valueChange={(e) =>
              setFormData({ ...formData, birthdate: e.target.value })
            }
          />
          <ContainerInput
            type="text"
            name="direction"
            icono={<BsFillHouseDoorFill />}
            placeholder={"Dirección"}
            value={formData.direction}
            hasContentState={true}
            valueChange={(e) =>
              setFormData({ ...formData, direction: e.target.value })
            }
          />

          <Select
            data={[
              { value: "F", text: "Femenino" },
              { value: "M", text: "Masculino" },
            ]}
            name="sex"
            placeholder={"Sexo"}
            value={formData.sex}
            icono={<FaVenusMars />}
            content={true}
            valueChange={(e) =>
              setFormData({ ...formData, sex: e.target.value })
            }
          />
          <ContainerInput
            type="text"
            name="parroquia"
            placeholder={"Parroquia"}
            value={formData.parroquia}
            icono={<FaMapPin />}
            hasContentState={true}
            valueChange={(e) =>
              setFormData({ ...formData, parroquia: e.target.value })
            }
          />
          {/* <ContainerInput
            type="text"
            name="etnia"
            placeholder={"Etnia"}
            value={formData.etnia}
            hasContentState={true}
            valueChange={(e) =>
              setFormData({ ...formData, etnia: e.target.value })
            }
          /> */}

          <div className="submit-container">
            <button className="submit" id="">
              Actualizar datos
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserData;
