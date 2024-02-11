import Section from "./components/Section";
import Element from "./components/Element";
import { RiSendToBack } from "react-icons/ri";
interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <div className="container-aside">
      <aside className="sidebar">
        <nav>
          <ul className="container-lists">
            <Section title={"Inicio"}>
              <Element text={"Dashboard"} icono={<RiSendToBack />} />
              <Element text={"Dashboard"} icono={<RiSendToBack />} />
              <Element text={"Dashboard"} icono={<RiSendToBack />} />
            </Section>
            <Section title={"salida"}>
              <Element text={"Dashboard"} icono={<RiSendToBack />} />
              <Element text={"Dashboard"} icono={<RiSendToBack />} />
              <Element text={"Dashboard"} icono={<RiSendToBack />} />
            </Section>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
