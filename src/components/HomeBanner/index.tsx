import "./styles.scss";

const HomeBanner = () => {
  return (
    <div className="banner">
      <div className="welcome">
        <h4>Bem-vido (a) ao ticket.</h4>
        <p>
          Acompanhe <br />
          todos os seus <br />
          <strong>Chamados.</strong>
        </p>
      </div>
      <img
        src="./img/assets/working_remotely.svg"
        alt="Duas pessoas trabalhando de casa e um cachorro"
      />
    </div>
  );
};

export default HomeBanner;
