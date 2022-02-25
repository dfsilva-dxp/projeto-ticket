import { Outlet } from "react-router-dom";

import "./styles.scss";

const Login = () => {
  return (
    <section className="wrapper-login">
      <div className="container">
        Login
        {/* <Outlet /> */}
      </div>
      <footer className="login-footer">
        <p>
          &copy; 2022 &bull; <span>ticket.app</span> Todos os direitos
          reservados
        </p>
      </footer>
    </section>
  );
};

export default Login;
