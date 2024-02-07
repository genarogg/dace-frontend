import React, { useState } from "react";

import Login from "./faces/Login";
import Register from "./faces/Register";

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  const [formState, setFormState] = useState("initial");

  const cardState = (css: string) => {
    setFormState(css);
  };

  return (
    <div className={`container-form-all ${formState}`} id="containerFormAll">
      <Login cardState={cardState} />
      <Register cardState={setFormState} />
    </div>
  );
};

export default Form;
