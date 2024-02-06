import ContainerInput from "./global/ContainerInput";
import CheckBox from "./global/CheckBox";

import { BsEnvelopeFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className="login">
      <form>
        <ContainerInput
          type="text"
          name="nombre"
          placeholder={"Nombre"}
          icono={<BsEnvelopeFill />}
        />
        <ContainerInput
          type="password"
          name="password"
          placeholder={"Contraseña"}
          icono={<MdLock />}
        />
        <CheckBox />
      </form>
    </div>
  );
};

export default Login;
