import { FaConnectdevelop } from "react-icons/fa6";
import Btn from "./global/Btn";

interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  const action = () => {
    console.log("Action");
  };
  return (
    <div className="container-main">
      <Btn img={"/dashboard/3-salir-2.png"} action={action} text="Text" />
      <Btn img={"/dashboard/3-salir-2.png"} action={action} text="Text" />
      <Btn img={"/dashboard/3-salir-2.png"} action={action} text="Text" />
      <Btn img={"/dashboard/3-salir-2.png"} action={action} text="Text" />
      <Btn img={"/dashboard/3-salir-2.png"} action={action} text="Text" />
      <Btn img={"/dashboard/3-salir-2.png"} action={action} text="Text" />
    </div>
  );
};

export default Demo;
