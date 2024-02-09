import React from "react";

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className="footer-container">
      <div className="desktop-footer"><h1>Footer</h1></div>
    </footer>
  );
};

export default Footer;
