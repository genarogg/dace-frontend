import React, { useState } from "react";
import { Icono } from "@nano";
import { FaSquareCheck } from "react-icons/fa6";
import { ImCheckboxUnchecked } from "react-icons/im";

interface CheckBoxProps {
  valueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ valueChange }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    valueChange({ target: { checked: !isClicked } } as React.ChangeEvent<HTMLInputElement>);
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
