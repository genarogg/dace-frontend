import $ from "../../function/$";

interface HeadBtnProps {
  cardState: (css: string) => void;
}

const HeadBtn: React.FC<HeadBtnProps> = ({ cardState }) => {
  const btnActive = () => {
    $("containerFormAll")?.classList.add("active");

    //quita la clase active despues de 3 segundos
    setTimeout(() => {
      $("containerFormAll")?.classList.remove("active");
    }, 1000);
  };

  return (
    <div className="btn-sesion">
      <button
        id="btnLogin"
        onClick={() => {
          cardState("front-active");
          btnActive();
        }}
      >
        <span>Iniciar sesión</span>
      </button>
      <span className="span-sesion">|</span>
      <button
        id="btnRegister"
        onClick={() => {
          cardState("right-active");
          btnActive();
        }}
      >
        <span>Regístrarse</span>
      </button>
    </div>
  );
};

export default HeadBtn;
