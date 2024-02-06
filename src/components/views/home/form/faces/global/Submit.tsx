interface SubmitProps {
  name: string;
  id: string;
  type?: any;
  css?: string;
}

const Submit: React.FC<SubmitProps> = ({
  name,
  id,
  type = "submit",
  css = " ",
}) => {
  return (
    <div className="submit-container">
      <button className="submit" name={name} id={id} type={type}>
        Acceder
      </button>
    </div>
  );
};

export default Submit;
