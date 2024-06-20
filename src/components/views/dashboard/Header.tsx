import React, { useState, useEffect } from "react";
import { A, Gravatar, BtnHamburgues } from "@nano";
import { CSSTransition } from "react-transition-group";
import SideBar from "./sidebar/SideBar";
import { logOut } from "./mainContent/components/global/cerrarSeccion";
interface HeaderProps {
  children?: React.ReactNode;
  where?: string;
  setContext: React.Dispatch<React.SetStateAction<string>>;
  context: string;
}

const Header: React.FC<HeaderProps> = ({
  children,
  where,
  context,
  setContext,
}) => {
  type User = {
    nombre: string;
    apellido: string;
    correo: string;
    id: string;
  };

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("usuario");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const Title = () => {
    return (
      <div className="titulo">
        <h1>
          UNERG <span style={{ position: "relative", bottom: "1px" }}>|</span>{" "}
          DACE
        </h1>
      </div>
    );
  };

  const Avatar = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [show, setShow] = useState(false);
    const handleAvatarClick = () => {
      setShowTooltip(!showTooltip);

      setTimeout(() => {
        setShow(!showTooltip);
      }, 100);
    };

    return (
      <li>
        <button onClick={handleAvatarClick} className="user-img">
          {user && <Gravatar email={user.correo} />}
        </button>
        {showTooltip && (
          <div className={`tooltip ${show ? "show" : ""}`}>
            <button
              onClick={() => {
                logOut();
              }}
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </li>
    );
  };
  const Name = () => {
    return (
      <li>
        <span className="name">
          {user && `${user.nombre} ${user.apellido}`}
        </span>
      </li>
    );
  };

  const [isActive, setIsActive] = useState(false);

  return (
    <header className="header-container">
      <div className="desktop-header">
        <Title />
        <nav>
          {user ? (
            <CSSTransition in={true} timeout={500} classNames="fade" appear>
              <ul key={user.id}>
                <Name />
                <Avatar />
              </ul>
            </CSSTransition>
          ) : (
            <ul></ul>
          )}
        </nav>
      </div>
      <div
        className={`movile-header ${isActive ? "active" : ""}`}
        id="movileHeader"
      >
        <nav>
          <SideBar
            setContext={setContext}
            setIsActive={setIsActive}
            css="sidebar-header"
            context={context}
          />
          <ul className="elements">
            <li>
              <button
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                <BtnHamburgues isActive={isActive} setIsActive={setIsActive} />
              </button>
            </li>
            <li>
              <Title />
            </li>
            {user ? (
              <CSSTransition in={true} timeout={500} classNames="fade" appear>
                <Avatar />
              </CSSTransition>
            ) : (
              <li></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
