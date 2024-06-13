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

interface CargarNotasProps {}

const CargarNotas: React.FC<CargarNotasProps> = () => {
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

    fetch(`${BACKEND_URL}/nota/carga-profesor`, {
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
        ></form>
      </div>
    </>
  );
};

export default CargarNotas;
