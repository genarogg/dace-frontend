import React, { ReactElement } from "react";
import { Icono } from "@nano";

import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  const Li = ({ to, ico }: { to: string; ico: ReactElement }) => {
    return (
      <li>
        <a href={to} target="_blank" rel="noreferrer">
          <Icono icono={ico} />
        </a>
      </li>
    );
  };
  return (
    <footer className="footer-container">
      <div className="desktop-footer">
        <button>Ver videos demostrativos</button>
        <ul>
          <Li to="#" ico={<FaXTwitter />} />
          <Li to="#" ico={<FaFacebookF />} />
          <Li to="#" ico={<FaInstagram />} />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
