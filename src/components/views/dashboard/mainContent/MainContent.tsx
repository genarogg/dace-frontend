import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Demo from "./components/Demo";
import Initial from "./components/Initial";

interface MainContentProps {
  context: string;
  setContext: React.Dispatch<React.SetStateAction<string>>;
}

const MainContent: React.FC<MainContentProps> = ({ context, setContext }) => {
  

  return <Initial setContext={setContext} />;
};

export default MainContent;
