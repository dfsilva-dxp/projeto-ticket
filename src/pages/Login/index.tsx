import { Outlet } from "react-router-dom";

import Footer from "components/Footer";

import "./styles.scss";

const Login = () => {
  return (
    <section className="wrapper-login">
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default Login;
