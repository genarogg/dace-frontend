import ContainerInput from "./global/ContainerInput";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {


  return (
    <div className="login">
      <form>
        <ContainerInput type="text" name="nombre" placeholder={"nombre"} />
      </form>
    </div>
  );
};

export default Login;
