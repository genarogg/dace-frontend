import { Icono } from "@nano";

interface SectionProps {
  title: string;
  children?: React.ReactNode;
  icono: React.ReactNode;
  setContext?: (newContext: string) => void;
  setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Section: React.FC<SectionProps> = ({
  title,
  icono,
  setContext,
  setIsActive,
  children,
}) => {
  return (
    <div className="lista">
      <li>
        <button
          className={`section ${setContext ? "active" : ""}`}
          onClick={() => {
            setContext && setContext("initial");
            setIsActive && setIsActive(false);
          }}
        >
          <Icono icono={icono} />
          <span>{title}</span>
        </button>
        <ul className="group-element">
          <li>{children}</li>
        </ul>
      </li>
    </div>
  );
};

export default Section;
