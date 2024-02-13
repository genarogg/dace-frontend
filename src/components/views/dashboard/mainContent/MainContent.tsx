import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Demo from "./components/Demo";
import Initial from "./components/Initial";

interface MainContentProps {
  context: string;
  setContext: () => void;
}

const MainContent: React.FC<MainContentProps> = ({ context, setContext }) => {
  const renderComponent = () => {
    switch (context) {
      case "initial":
        return <Initial setContext={setContext} />;
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
