import "./styles.scss";

const Banner = () => {
  return (
    <div className="wrapper-banner">
      <div className="welcome">
        <h4>Bem-vindo (a) ao ticket.</h4>
        <p>
          Acompanhe aqui todos os seus <strong>chamados.</strong>
        </p>
      </div>
      <img src="./img/assets/working_remotely.svg" alt="" />
    </div>
  );
};

export default Banner;
