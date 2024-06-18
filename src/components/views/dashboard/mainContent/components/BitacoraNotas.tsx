import React, { useState, useEffect } from "react";
import ContainerInput from "@form/ContainerInput";
import BannerPosition from "./global/BannerPosition";
import { Grid } from "gridjs-react";
import cargarNotasSutmit from "./global/cargarNotasSutmit";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { RxActivityLog } from "react-icons/rx";

import Select from "@form/Select";

import { BACKEND_URL } from "@env";

interface BitacoraNotasProps {}

const BitacoraNotas: React.FC<BitacoraNotasProps> = () => {
  const [formData, setFormData] = useState({
    materia: "",
    estudiantes: [] as any[],
  });

  const [info, setInfo] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${BACKEND_URL}/notas/obtenerCargadas`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);

  // Transformar los datos de la materia

  const materiaData = info
    .filter(
      (item: any) =>
        item.estudiantesInscritos && item.estudiantesInscritos.length > 0
    )
    .map((item: any) => ({
      value: item.materia.id,
      text: item.materia.nombre,
    }));

  const handleMateriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMateriaId = Number(e.target.value);

    if (!selectedMateriaId) {
      return;
    }

    const estudiantes = info[selectedMateriaId - 1].estudiantesInscritos;

    setFormData({ ...formData, materia: e.target.value, estudiantes });
    console.log(formData);
  };

  const columns = ["ID", "Nombre", "Apellido", "Cédula", "Nota"];

  const data = formData.estudiantes.map((estudiante: any) => [
    estudiante.id,
    estudiante.nombre,

    estudiante.apellido,

    estudiante.cedula,
    estudiante.nota,
  ]);

  return (
    <>
      <BannerPosition title="Notas cargadas" />
      <div className="perfil  login container-nota-estudiante">
        <form>
          <Select
            icono={<RxActivityLog />}
            data={materiaData}
            name="materia"
            placeholder={"Seleccione la materia"}
            value={formData.materia}
            content={true}
            valueChange={(e: any) => {
              handleMateriaChange(e);
            }}
          />
          <TransitionGroup className="container-notas">
            {formData.estudiantes.length !== 0 && (
              <CSSTransition in={true} timeout={500} classNames="item">
                <div className="notasCargadas horario">
                  <Grid data={data} columns={columns} />
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </form>
      </div>
    </>
  );
};

export default BitacoraNotas;
