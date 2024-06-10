import React, { useState } from "react";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import { RECAPTCHA_KEY } from "@env";

import Login from "./faces/Login";
import Register from "./faces/Register";
import ResetPass from "./faces/ResetPass";

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  const [formState, setFormState] = useState("initial");

  const cardState = (css: string) => {
    setFormState(css);
  };

  return (
    <div className={`container-form-all ${formState}`} id="containerFormAll">
      <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_KEY}>
        <ResetPass cardState={setFormState} />
        <Login cardState={cardState} />
        <Register cardState={setFormState} />
      </GoogleReCaptchaProvider>
    </div>
  );
};

export default Form;
