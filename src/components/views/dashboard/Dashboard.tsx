import { useState, useEffect } from "react";

import Layout from "@layout";
import SideBar from "./sidebar/SideBar";

import MainContent from "./mainContent/MainContent";

import Header from "./Header";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const [context, setContext] = useState("initial");

  useEffect(() => {
    const contextLocal = localStorage.getItem("context");

    if (contextLocal) {
      setContext(contextLocal);
    }
  }, [setContext]);

  useEffect(() => {}, [context]);

  return (
    <Layout
      where="dashboard"
      header={<Header where="dashboard" setContext={setContext} />}
    >
      <div className={`container-dashboard-all`} id="containerDashboardAll">
        <SideBar setContext={setContext} css={"main-content-sidebar"} />
        <div className="container-main-content">
          <MainContent context={context} setContext={setContext} />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
