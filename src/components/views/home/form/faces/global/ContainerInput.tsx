import React, { useState } from "react";

import { Icono } from "@nano";
interface ContainerInputProps {
  type: string;
  name: string;
  id?: string;
  placeholder: string;
  icono?: React.ReactNode;
  value: string | number | boolean;
  valueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasContentState?: boolean;
  max?: number;
  min?: number;
  required?: boolean;
}

const ContainerInput: React.FC<ContainerInputProps> = ({
  type,
  name,
  id = name,
  placeholder,
  icono,
  value,
  valueChange,
  hasContentState = false,
  min,
  max,
  required = true,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasContent, setHasContent] = useState(hasContentState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasContent(event.target.value !== "");
    valueChange(event);
  };

  return (
    <div className={`container-input ${isFocused ? "focus" : ""}`}>
      <label htmlFor={`#${id}`}>
        <Icono icono={icono} />
      </label>

      <input
        type={type}
        name={name}
        required={required}
        id={id}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleInputChange}
        value={value as string | number | readonly string[] | undefined}
        {...(min ? { min } : {})}
        {...(max ? { max } : {})}
      />
      <span className={`holder ${hasContent ? "has-content" : ""}`}>
        {placeholder}
      </span>
    </div>
  );
};

export default ContainerInput;
