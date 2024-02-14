import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import Initial from "./components/Initial";

interface MainContentProps {
  context: string;
  setContext: React.Dispatch<React.SetStateAction<string>>;
}

const MainContent: React.FC<MainContentProps> = ({ context, setContext }) => {
  const renderComponent = () => {
    switch (context) {
      case "initial":
        return <Initial setContext={setContext} />;
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
