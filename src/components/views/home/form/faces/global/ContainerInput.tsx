import { Icono } from "@nano";
import { AiFillMail } from "react-icons/ai";

interface ContainerInputProps {
  type: string;
  name: string;
  id?: string;
  placeholder: string;
}

const ContainerInput: React.FC<ContainerInputProps> = ({
  type,
  name,
  id = name,
  placeholder,
}) => {
  return (
    <div className="container-input">
      <Icono icono={<AiFillMail />} />
      <input type={type} name={name} id={id} placeholder={placeholder} />
      <label>{placeholder}</label>
    </div>
  );
};

export default ContainerInput;
