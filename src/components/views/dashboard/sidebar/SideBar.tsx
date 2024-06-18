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

import { CgTimelapse } from "react-icons/cg";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaUserLock } from "react-icons/fa6";
import { FaRegRectangleList } from "react-icons/fa6";
import { logOut } from "../mainContent/components/global/cerrarSeccion";

interface SideBarProps {
  children?: React.ReactNode;
  setContext: React.Dispatch<React.SetStateAction<string>>;
  fn?: () => void;
  css?: string;
  setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
  context: string;
}

const SideBar: React.FC<SideBarProps> = ({
  setContext,
  fn,
  css,
  setIsActive,
  context,
}) => {
  return (
    <div className={`container-aside ${css}`}>
      <aside className="sidebar">
        <nav>
          <ul className="container-lists">
            <Section
              title={"Inicio"}
              icono={<GoHomeFill />}
              setContext={setContext}
              setIsActive={setIsActive}
            ></Section>
            <Section title={"Perfil"} icono={<TiUser />}>
              <Element
                text={"Mis datos"}
                icono={<RiNewspaperFill />}
                setContext={setContext}
                setIsActive={setIsActive}
                context={context}
              />
              {/* <Element
                text={"Cambio de email"}
                icono={<BsEnvelopeHeartFill />}
                setContext={setContext}
                setIsActive={setIsActive}
                context={context}
              /> */}
              <Element
                text={"Cambio de contraseña"}
                icono={<IoMdLock />}
                setContext={setContext}
                setIsActive={setIsActive}
                context={context}
              />
            </Section>
            <Section title={"Carga Académica"} icono={<HiMiniAcademicCap />}>
              <Element
                text={"Consultar Horario"}
                icono={<FaClock />}
                setContext={setContext}
                setIsActive={setIsActive}
                context={context}
              />
              <Element
                text={"Cargar Notas"}
                icono={<PiNotebookFill />}
                setContext={setContext}
                setIsActive={setIsActive}
                context={context}
              />
            </Section>

            <Section title={"Bitacora"} icono={<FaCalendarCheck />}>
              <Element
                text={"Registros de inicio"}
                icono={<FaUserLock />}
                setContext={setContext}
                setIsActive={setIsActive}
                context={context}
              />

              <Element
                text={"Registros de notas"}
                icono={<FaRegRectangleList />}
                setContext={setContext}
                setIsActive={setIsActive}
                context={context}
              />

              {/* <Element
                text={"Carga de notas"}
                icono={<PiNotebookFill />}
                setContext={setContext}
                setIsActive={setIsActive}
                context={context}
              /> */}
            </Section>
          </ul>
        </nav>
      </aside>
      <div className="salirBtn">
        <button
          onClick={() => {
            logOut();
          }}
        >
          cerrar sesion
        </button>
      </div>
    </div>
  );
};

export default SideBar;
