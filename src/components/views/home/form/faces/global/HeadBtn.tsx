interface HeadBtnProps {}

const HeadBtn: React.FC<HeadBtnProps> = () => {
  return (
    <div className="btn-sesion">
      <button id="btnLogin">
        <span>Iniciar sesión</span>
      </button>
      <span className="span-sesion">|</span>
      <button id="btnRegister">
        <span>Regístrarse</span>
      </button>
    </div>
  );
};

export default HeadBtn;
