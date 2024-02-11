import Layout from "@layout";
import SideBar from "./siderbar/SideBar";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <Layout where="dashboard">
      <div className={`container-dashboard-all`} id="containerDashboardAll">
        <SideBar />
        <div className="container-img" style={{marginLeft:"200px"}}>
          <div
            className=""
            style={{ width: "100px", height: "100px", backgroundColor: "#333" }}
          ></div>
          <div
            className=""
            style={{ width: "100px", height: "100px", backgroundColor: "#333" }}
          ></div>
          <div
            className=""
            style={{ width: "100px", height: "100px", backgroundColor: "#333" }}
          ></div>
          <div
            className=""
            style={{ width: "100px", height: "100px", backgroundColor: "#333" }}
          ></div>
          <div
            className=""
            style={{ width: "100px", height: "100px", backgroundColor: "#333" }}
          ></div>
          <div
            className=""
            style={{ width: "100px", height: "100px", backgroundColor: "#333" }}
          ></div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
