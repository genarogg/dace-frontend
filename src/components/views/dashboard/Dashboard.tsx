import Layout from "@layout";
import SideBar from "./siderbar/SideBar";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <Layout where="dashboard">
      <div className={`container-dashboard-all`} id="containerDashboardAll">
        <SideBar />
       
      </div>
    </Layout>
  );
};

export default Dashboard;
