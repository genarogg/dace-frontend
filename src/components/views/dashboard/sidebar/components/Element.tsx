import { Icono } from "@nano";
import $createFriendlyUrl from "@fn/$createFriendlyUrl";

interface ElementProps {
  text: string;
  icono: React.ReactNode;
  setContext?: (newContext: string) => void;
}

const Element: React.FC<ElementProps> = ({ text, icono, setContext }) => {
  return (
    <button
      className="element"
      onClick={() => {
        const createFriendlyUrl = $createFriendlyUrl(text);
        setContext && setContext(createFriendlyUrl);
      }}
    >
      <Icono icono={icono} />
      <span className="text">{text}</span>
    </button>
  );
};

export default Element;
