import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Demo from "./components/Demo";
import Initial from "./components/Initial";
import NewPass from "./components/NewPass";
import Perfil from "./components/Perfil";

import CargarNotas from "./components/CargarNotas";

interface MainContentProps {
  context: string;
  setContext: React.Dispatch<React.SetStateAction<string>>;
}

const MainContent: React.FC<MainContentProps> = ({ context, setContext }) => {
  const renderComponent = () => {
    switch (context) {
      case "initial":
        return <Initial setContext={setContext} />;
      case "mis-datos":
        return <Perfil />;
      case "cambio-de-contrasena":
        return <NewPass />;
      case "consultar-horario":
        return <Demo />;
      case "cargar-notas":
        return <CargarNotas />;
      default:
        return <Demo />;
    }
  };

  return (
    <SwitchTransition>
      <CSSTransition key={context} timeout={500} classNames="fade">
        {renderComponent()}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default MainContent;
