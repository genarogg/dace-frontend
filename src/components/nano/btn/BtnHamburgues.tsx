import { useState } from "react";

interface BtnHamburguesProps {}

const BtnHamburgues: React.FC<BtnHamburguesProps> = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      onClick={() => toggleActive()}
      className={`btnX btnMenu ${isActive ? "active" : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BtnHamburgues;
