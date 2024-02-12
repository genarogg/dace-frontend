
import { Icono } from "@nano";

interface ElementProps {
  text: string;
  icono: React.ReactNode;
}

const Element: React.FC<ElementProps> = ({ text, icono }) => {
  return (
    <button className="element">
      <Icono icono={icono} />
      <span className="text">{text}</span>
    </button>
  );
};

export default Element;
