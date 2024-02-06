import Login from "./faces/Login";

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  return (
    <div className="container-form-all">
      <Login />
    </div>
  );
};

export default Form;
