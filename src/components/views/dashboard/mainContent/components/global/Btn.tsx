/* import { Icono } from "@nano"; */
import Image from "next/image";
interface BtnProps {
  img: string;
  text: string;
  action: () => void;
}

const Btn: React.FC<BtnProps> = ({ img, text, action }) => {
  return (
    <div className="main">
      <button
        onClick={() => {
          action();
        }}
      >
        <div className="container-icono">
          <Image
            src={img}
            alt="Descripción de la imagen"
            width={100} 
            height={100} 
          />
        </div>
        <div className="container-text">
          <span className="text">{text}</span>
        </div>
      </button>
    </div>
  );
};

export default Btn;
