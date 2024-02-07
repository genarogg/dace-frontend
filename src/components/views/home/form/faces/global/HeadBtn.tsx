interface HeadBtnProps {}

const HeadBtn: React.FC<HeadBtnProps> = () => {
  return (
    <div className="btn-sesion">
      <button className="btn-login" id="btnLogin">
        <span>Iniciar sesión</span>
      </button>
      <span className="span-sesion">|</span>
      <button className="register" id="btnRegister">
        <span>Regístrarse</span>
      </button>
    </div>
  );
};

export default HeadBtn;
