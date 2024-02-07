import Login from "./faces/Login";
import Register from "./faces/Register";

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  return (
    <div className="container-form-all">
      <Login />
      <Register />
    </div>
  );
};

export default Form;
