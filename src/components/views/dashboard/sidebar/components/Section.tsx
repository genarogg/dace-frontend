import { Icono } from "@nano";

interface SectionProps {
  title: string;
  children?: React.ReactNode;
  icono: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icono, children }) => {
  return (
    <div className="lista">
      <li>
        <button className="section">
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
