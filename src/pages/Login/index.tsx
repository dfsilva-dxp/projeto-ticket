import { Outlet } from "react-router-dom";

import "./styles.scss";

export const Login = () => {
  return (
    <section className="wrapper-login">
      <div className="container">
        <Outlet />
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
