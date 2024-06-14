import React, { useState, useEffect } from "react";
import ContainerInput from "@form/ContainerInput";
import BannerPosition from "./global/BannerPosition";

import cargarNotasSutmit from "./global/cargarNotasSutmit";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { RxActivityLog } from "react-icons/rx";

import Select from "@form/Select";

import { BACKEND_URL } from "@env";

interface CargarNotasProps {}

const CargarNotas: React.FC<CargarNotasProps> = () => {
  const [formData, setFormData] = useState({
    materia: "",
    estudiantes: [] as any[],
  });

  const [info, setInfo] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${BACKEND_URL}/notas/cargar`, {
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
  const materiaData = info.map((materia: any) => ({
    value: materia.MateriaId,
    text: materia.nombre,
  }));

  const handleMateriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMateriaId = Number(e.target.value);

    if (!selectedMateriaId) {
      return;
    }

    const estudiantes = info[selectedMateriaId - 1].estudiantes;

    setFormData({ ...formData, materia: e.target.value, estudiantes });
  };

  return (
    <>
      <BannerPosition title="Cambiar Informacion" />
      <div className="perfil  login container-nota-estudiante">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            cargarNotasSutmit(formData);
          }}
        >
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
              <div className="nota-titulo">
                <label>Nombre</label>
                <label>Cédula</label>
                <label>Nota</label>
              </div>
            )}
            {formData.estudiantes.map((estudiante, index) => (
              <CSSTransition
                key={estudiante.id}
                timeout={500}
                classNames="item"
              >
                <div className="nota-input">
                  <label>
                    {estudiante.nombre} {estudiante.apellido}
                  </label>
                  <label>{estudiante.cedula}</label>
                  <ContainerInput
                    type="number"
                    name={`nota-${estudiante.id}`}
                    placeholder="Nota"
                    value={estudiante.nota || ""}
                    required={false}
                    valueChange={(e) => {
                      let estudiantes = [...formData.estudiantes];
                      estudiantes[index].nota = Number(e.target.value);
                      setFormData({ ...formData, estudiantes });
                    }}
                    min={1}
                    max={10}
                  />
                </div>
              </CSSTransition>
            ))}

            {formData.estudiantes.length !== 0 && (
              <div className="submit-container">
                <button className="submit" id="">
                  Cargar Notas
                </button>
              </div>
            )}
          </TransitionGroup>
        </form>
      </div>
    </>
  );
};

export default CargarNotas;
