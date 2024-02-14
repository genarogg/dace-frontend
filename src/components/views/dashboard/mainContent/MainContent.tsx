import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

interface MainContentProps {
  context: string;
  setContext: React.Dispatch<React.SetStateAction<string>>;
}

const MainContent: React.FC<MainContentProps> = ({ context, setContext }) => {
  const renderComponent = () => {
    switch (context) {
      case "initial":
    }
  };

  return <p>holla</p>;
};

export default MainContent;
