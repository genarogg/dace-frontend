import ContainerInput from "./global/ContainerInput";
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
          placeholder={"nombre"}
          icono={<BsEnvelopeFill />}
        />
        <ContainerInput
          type="password"
          name="password"
          placeholder={"contraseña"}
          icono={<MdLock />}
        />
      </form>
    </div>
  );
};

export default Login;
