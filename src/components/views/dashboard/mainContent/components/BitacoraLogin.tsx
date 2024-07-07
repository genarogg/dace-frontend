import React, { useState, useEffect } from "react";

import { BACKEND_URL } from "@env";

import BannerPosition from "./global/BannerPosition";

import { Grid } from "gridjs-react";

interface BitacoraLoginProps {}

const BitacoraLogin: React.FC<BitacoraLoginProps> = () => {
  const action = () => {
    console.log("Action");
  };

  const [bitacora, setBitacora] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${BACKEND_URL}/user/bitacora`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBitacora(data);
      });
  }, []);

  const columns = ["ID", "Usuario ID", "Fecha", "IP", "User Agent"];

  const data = bitacora.map((registro: any) => [
    registro.id,
    registro.usuarioId,
    new Date(registro.fecha).toLocaleString("es-ES"),
    registro.ip,
    registro.userAgent,
  ]);

  return (
    <>
      <BannerPosition title="Inicios de sesion" />

      <div className="horario bitacora-login">
        <Grid data={data} columns={columns} />
      </div>
    </>
  );
};

export default BitacoraLogin;
