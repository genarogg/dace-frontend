import { useState } from "react";

const StateDashboard = () => {
  const [context, setContext] = useState("initial");

  return { context, setContext };
};

export default StateDashboard;
