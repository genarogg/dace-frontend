import React, { useState, useEffect } from "react";

import { BACKEND_URL } from "@env";

import BannerPosition from "./global/BannerPosition";

interface HorariosProps {}

import { Grid } from "gridjs-react";

import DownloadPDFButton from "./pdf/DownloadPDFButton";
import HorarioPDF from "./pdf/HorarioPDF";

const Horarios: React.FC<HorariosProps> = () => {
  const [horariosData, setHorariosData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${BACKEND_URL}/user/horario`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setHorariosData(data);
      });
  }, []);

  const columns = ["Código", "Materia", "Sección", "Clase", "Aula"];

  const data = horariosData.flatMap((data: any) =>
    data.horario.map((horario: any) => [
      data.materia.codigo,
      data.materia.nombre,
      data.materia.seccion,
      `${horario.dia}: ${horario.horaInicio} - ${horario.horaFin}`,
      horario.aula,
    ])
  );

  return (
    <>
      <BannerPosition title="horario" />

      <div className="horario">
        <Grid data={data} columns={columns} />
      </div>

      <div className="containerDescargarPdf">
        <DownloadPDFButton
          document={<HorarioPDF data={horariosData} />}
          text="Descargar PDF"
        />
      </div>
    </>
  );
};

export default Horarios;
