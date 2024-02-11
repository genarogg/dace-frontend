

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="lista">
      <li>
        <button className="section">{title}</button>
        <ul className="group-element">
          <li>{children}</li>
        </ul>
      </li>
    </div>
  );
};

export default Section;
