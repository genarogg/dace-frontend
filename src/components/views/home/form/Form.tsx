import Login from "./faces/Login";

interface FormProps {}

const Form: React.FunctionComponent<FormProps> = () => {
  return (
    <div className="container-form-all">
      <Login />
    </div>
  );
};

export default Form;
