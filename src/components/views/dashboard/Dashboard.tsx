import Layout from "@layout";
import SideBar from "./sidebar/SideBar";

import Section from "./sidebar/components/Section";
import Element from "./sidebar/components/Element";
import { RiSendToBack } from "react-icons/ri";

import { FaUser } from "react-icons/fa";
import { BsClipboardDataFill } from "react-icons/bs";
import { BsEnvelopeHeartFill } from "react-icons/bs";
import { RiNewspaperFill } from "react-icons/ri";
import { IoMdLock } from "react-icons/io";

import { FaClock } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi";
import { BiSolidBolt } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
import { TiUser } from "react-icons/ti";

import { GoHomeFill } from "react-icons/go";
import { HiMiniAcademicCap } from "react-icons/hi2";
interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <Layout where="dashboard">
      <div className={`container-dashboard-all`} id="containerDashboardAll">
        {/* profesores */}
        <SideBar>
        <Section title={"Inicio"} icono={<GoHomeFill />}>
          </Section>
          <Section title={"Perfil"} icono={<TiUser />}>
            <Element text={"Mis datos"} icono={<RiNewspaperFill />} />
            <Element text={"Cambio de email"} icono={<BsEnvelopeHeartFill />} />
            <Element text={"Cambio de contraseña"} icono={<IoMdLock />} />
          </Section>
          <Section title={"Carga Académica"} icono={<HiMiniAcademicCap />}>
            <Element text={"Consultar Horario"} icono={<FaClock />} />
            <Element text={"Cargar Notas"} icono={<PiNotebookFill />} />
          </Section>

          
        </SideBar>
      </div>
    </Layout>
  );
};

export default Dashboard;
