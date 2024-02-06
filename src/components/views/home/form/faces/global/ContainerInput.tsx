import React, { useState } from "react";

import { Icono } from "@nano";
import { AiFillMail } from "react-icons/ai";

interface ContainerInputProps {
  type: string;
  name: string;
  id?: string;
  placeholder: string;
}

const ContainerInput: React.FC<ContainerInputProps> = ({
  type,
  name,
  id = name,
  placeholder,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasContent(event.target.value !== "");
  };

  return (
    <div className={`container-input ${isFocused ? "focus" : ""}`}>
      <label htmlFor={`#${id}`}>
        <Icono icono={<AiFillMail />} />
      </label>

      <input
        type={type}
        name={name}
        id={id}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleInputChange}
      />
      <span className={`holder ${hasContent ? "has-content" : ""}`}>
        {placeholder}
      </span>
    </div>
  );
};

export default ContainerInput;
