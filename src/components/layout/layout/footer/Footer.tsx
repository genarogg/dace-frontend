import React from "react";
import { MdOutlineLock } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
interface FooterProps {
  children?: React.ReactNode;
}

import { Icono } from "@nano";

import { FaFacebookF } from "react-icons/fa6";

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className="footer-container">
      <div className="desktop-footer">
        <button>Ver videos demostrativos</button>

        <ul>
          <li>
            <a href="">
              <Icono icono={<FaFacebookF />} />
            </a>
          </li>
          <li>
            <a href="">
              <Icono icono={<FaXTwitter />} />
            </a>
          </li>
          <li>
            <a href="">
              <Icono icono={<FaInstagram />} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
