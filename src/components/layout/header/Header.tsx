import React from "react";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  interface LiProps {
    link: string;
    text: string;
  }

  const Li: React.FC<LiProps> = ({ link, text }) => {
    return (
      <li>
        <a href={link}>{text}</a>
      </li>
    );
  };

  return (
    <header className="header-container">
      <div className="desktop-header">
        <div className="titulo">
          <h1>
            UNERG | DACE
            
          </h1>
        </div>
        <nav>
          <ul>
            <Li link="http://www.unerg.edu.ve/" text="unerg" />
            <Li link="http://www.opsu.gob.ve/" text="opsu" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
