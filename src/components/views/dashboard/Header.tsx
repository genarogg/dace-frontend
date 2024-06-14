import React, { useState, useEffect } from "react";
import { A, Gravatar, BtnHamburgues } from "@nano";
import { CSSTransition } from "react-transition-group";
import SideBar from "./sidebar/SideBar";

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
  const [user, setUser] = useState(null);

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
    return (
      <li>
        <div className="user-img">
          {user && <Gravatar email={user.correo} />}
        </div>
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
