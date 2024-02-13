import Btn from "./global/Btn";

interface NewPassProps {
  setContext: React.Dispatch<React.SetStateAction<string>>;
}

const NewPass: React.FC<NewPassProps> = ({ setContext }) => {
  return (
    <div className="container-main">
      <div className="container-form-all"></div>
    </div>
  );
};

export default NewPass;
