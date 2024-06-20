import router from "next/router";
import Btn from "./global/Btn";

import { logOut } from "./global/cerrarSeccion";

interface InitialProps {
  setContext: React.Dispatch<React.SetStateAction<string>>;
}

const Initial: React.FC<InitialProps> = ({ setContext }) => {
  const myData = () => {
    setContext("mis-datos");
    console.log("Mis datos");
  };

  const changePass = () => {
    setContext("cambio-de-contrasena");
    console.log("changePass");
  };

  const uploadNotes = () => {
    setContext("cargar-notas");
    console.log("uploadNotes");
  };

  const checkSchedule = () => {
    setContext("consultar-horario");
    console.log("checkSchedule");
  };

  const listingsSection = () => {
    setContext("listados");
    console.log("listingsSection");
  };

  return (
    <div className="container-main">
      <Btn
        img={"/dashboard/1-datos.png"}
        text="Mis datos"
        action={() => {
          myData();
        }}
      />

      <Btn
        img={"/dashboard/2-combio-contrasena.png"}
        text="Cambiar contraseña"
        action={() => {
          changePass();
        }}
      />

      <Btn
        img={"/dashboard/3-salir-2.png"}
        text="Cerrar sesión"
        css="btn-logout"
        action={() => {
          logOut();
        }}
      />

      <Btn
        img={"/dashboard/4-cargar-notas.png"}
        text="Cargar Notas"
        action={() => {
          uploadNotes();
        }}
      />

      <Btn
        img={"/dashboard/5-consultar-horarios.png"}
        text="Consultar Horario"
        action={() => {
          checkSchedule();
        }}
      />
      <Btn
        img={"/dashboard/6-listados-por-seccion.png"}
        text="Listados por sección"
        action={() => {
          listingsSection();
        }}
      />
    </div>
  );
};

export default Initial;
