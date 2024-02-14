import { IoIosHome } from "react-icons/io";
import { Icono } from "@nano";

import Section from "./components/Section";
import Element from "./components/Element";

import { BsEnvelopeHeartFill } from "react-icons/bs";
import { RiNewspaperFill } from "react-icons/ri";
import { IoMdLock } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi";
import { TiUser } from "react-icons/ti";
import { GoHomeFill } from "react-icons/go";
import { HiMiniAcademicCap } from "react-icons/hi2";

interface SideBarProps {
  children?: React.ReactNode;
  setContext: React.Dispatch<React.SetStateAction<string>>;
  fn?: () => void;
  css?: string;
}

const SideBar: React.FC<SideBarProps> = ({ setContext, fn, css }) => {
  return (
    <div className={`container-aside ${css}`}>
      <aside className="sidebar">
        <nav>
          <ul className="container-lists">
            <Section
              title={"Inicio"}
              icono={<GoHomeFill />}
              setContext={setContext}
            ></Section>
            <Section title={"Perfil"} icono={<TiUser />}>
              <Element
                text={"Mis datos"}
                icono={<RiNewspaperFill />}
                setContext={setContext}
              />
              <Element
                text={"Cambio de email"}
                icono={<BsEnvelopeHeartFill />}
                setContext={setContext}
              />
              <Element
                text={"Cambio de contraseña"}
                icono={<IoMdLock />}
                setContext={setContext}
              />
            </Section>
            <Section title={"Carga Académica"} icono={<HiMiniAcademicCap />}>
              <Element
                text={"Consultar Horario"}
                icono={<FaClock />}
                setContext={setContext}
              />
              <Element
                text={"Cargar Notas"}
                icono={<PiNotebookFill />}
                setContext={setContext}
              />
            </Section>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
