import React, { useState } from "react";
import { useQuery } from "react-query";
import { A, Gravatar, BtnHamburgues } from "@nano";

import { CSSTransition } from "react-transition-group";
import SideBar from "./sidebar/SideBar";

interface HeaderProps {
  children?: React.ReactNode;
  where?: string;
  setContext: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ children, where, setContext }) => {
  interface LiProps {
    link: string;
    text: string;
  }

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
          {user && <Gravatar email={user[0].email} />}
        </div>
      </li>
    );
  };

  const Name = () => {
    return (
      <li>
        <span className="name">
          {user && `${user[0].firstName} ${user[0].firstNurname}`}
        </span>
      </li>
    );
  };

  const fetchUsers = async () => {
    const res = await fetch("/api/data-demo");
    return res.json();
  };

  const { data: user } = useQuery("users", fetchUsers);

  const [isActive, setIsActive] = useState(false);

  return (
    <header className="header-container">
      <div className="desktop-header">
        <Title />
        <nav>
          {user ? (
            <CSSTransition in={true} timeout={500} classNames="fade" appear>
              <ul key={user[0].id}>
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
