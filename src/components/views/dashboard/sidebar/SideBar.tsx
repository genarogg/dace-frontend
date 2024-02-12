import { IoIosHome } from "react-icons/io";
import { Icono } from "@nano";

interface SideBarProps {
  children?: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  return (
    <div className="container-aside">
      <aside className="sidebar">
        {/* <div className="home">
          <button>
            <Icono icono={<IoIosHome />} />
            <span>Inicio</span>
          </button>
        </div> */}
        <nav>
          <ul className="container-lists">{children}</ul>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
