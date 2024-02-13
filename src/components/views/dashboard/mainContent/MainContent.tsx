import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Demo from "./components/Demo";

interface MainContentProps {
  context: string;
}

const MainContent: React.FC<MainContentProps> = ({ context }) => {
  const renderComponent = () => {
    switch (context) {
      case "initial":
        return <Demo />;
      case "mis-datos":
        return <Demo />;
      case "cambio-de-email":
        return <Demo />;
      case "cambio-de-contrasena":
        return <Demo />;
      case "consultar-horario":
        return <Demo />;
      case "cargar-notas":
        return <Demo />;
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
