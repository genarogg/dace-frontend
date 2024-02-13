import { FaConnectdevelop } from "react-icons/fa6";
import { Icono } from "@nano";

interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  interface BtnProps {}

  const Btn: React.FC<BtnProps> = () => {
    return (
      <div className="main">
        <button>
          <div className="container-icono">
            <Icono icono={<FaConnectdevelop />} />
          </div>
          <div className="container-text">
            <span className="text">Text</span>
          </div>
        </button>
      </div>
    );
  };

  return (
    <div className="container-main">
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
    </div>
  );
};

export default Demo;
