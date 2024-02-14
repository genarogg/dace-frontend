import { useState } from "react";

interface BtnHamburguesProps {
  fn?: () => void;
}

const BtnHamburgues: React.FC<BtnHamburguesProps> = ({fn}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div
    onClick={() => {toggleActive(); fn && fn()}}
    className={`btnX btnMenu ${isActive ? "active" : ""}`} >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BtnHamburgues;
