import React, { useState } from "react";

import { A } from "@nano";

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
          {where === "dashboard" ? null : (
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
