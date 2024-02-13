import React from "react";
import { useQuery } from "react-query";
import { A, Gravatar } from "@nano";

import { CSSTransition } from "react-transition-group";

interface HeaderProps {
  children?: React.ReactNode;
  where?: string;
}

const Header: React.FC<HeaderProps> = ({ children, where }) => {
  interface LiProps {
    link: string;
    text: string;
  }

  const Li: React.FC<LiProps> = ({ link, text }) => {
    return (
      <li>
        <A type="a" to={link} text={text} />
      </li>
    );
  };

  const fetchUsers = async () => {
    const res = await fetch("/api/data-demo");
    return res.json();
  };

  const { data: user, isLoading } = useQuery("users", fetchUsers);

  return (
    <header className="header-container">
      <div className="desktop-header">
        <div className="titulo">
          <h1>
            UNERG <span style={{ position: "relative", bottom: "1px" }}>|</span>{" "}
            DACE
          </h1>
        </div>
        <nav>
          {isLoading ? (
            <ul></ul>
          ) : where === "dashboard" && user ? (
            <CSSTransition in={true} timeout={500} classNames="fade" appear>
              <ul key={user[0].id}>
                <li>
                  <span className="name">
                    {user[0].firstName} {user[0].firstNurname}
                  </span>
                </li>
                <li>
                  <div className="user-img">
                    <Gravatar email={user[0].email} />
                  </div>
                </li>
              </ul>
            </CSSTransition>
          ) : (
            <ul>
              <Li link="http://www.unerg.edu.ve/" text="unerg" />
              <Li link="http://www.opsu.gob.ve/" text="opsu" />
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
