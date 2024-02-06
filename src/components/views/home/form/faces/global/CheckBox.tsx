import React, { useState } from "react";
import { Icono } from "@nano";
import { FaSquareCheck } from "react-icons/fa6";
import { ImCheckboxUnchecked } from "react-icons/im";

interface CheckBoxProps {}

const CheckBox: React.FC<CheckBoxProps> = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="container-checkbox" onClick={handleClick}>
      {isClicked ? (
        <Icono icono={<FaSquareCheck />} css="animate" />
      ) : (
        <Icono icono={<ImCheckboxUnchecked />} />
      )}
      <span className="text">Mantener sesion</span>
    </div>
  );
};

export default CheckBox;
