import React, { useState } from "react";

import Layout from "@layout";
import SideBar from "./sidebar/SideBar";

import Section from "./sidebar/components/Section";
import Element from "./sidebar/components/Element";

import { BsEnvelopeHeartFill } from "react-icons/bs";
import { RiNewspaperFill } from "react-icons/ri";
import { IoMdLock } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi";
import { TiUser } from "react-icons/ti";
import { GoHomeFill } from "react-icons/go";
import { HiMiniAcademicCap } from "react-icons/hi2";
import MainContent from "./mainContent/MainContent";

/* import Header from "./Header"; */

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const [context, setContext] = useState("initial");

  return (
    <Layout where="dashboard" header={<header></header>}>
      <div className={`container-dashboard-all`} id="containerDashboardAll">
        
      </div>
    </Layout>
  );
};

export default Dashboard;
