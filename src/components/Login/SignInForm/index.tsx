import { Link } from "react-router-dom";

import { Input } from "../../Input";
import { TiLockClosedOutline, TiMail } from "react-icons/ti";

import "./styles.scss";
import { Button } from "../../Button";

export const SignInForm = () => {
  return (
    <section className="wrapper-signin float-left">
      <div className="display-text">
        <p>Bem-vindo (a) ao ticket, seus sistema de chamados.</p>
        <h1>
          Faça login e acesse os <br />
          seus <span> chamados.</span>
        </h1>
      </div>

      <form action="" className="signin-form">
        <h2>Log in</h2>
        <Input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Seu e-mail"
          icon={<TiMail />}
        />
        <Input
          type="password"
          name="password"
          id="password"
          required
          placeholder="Sua senha"
          icon={<TiLockClosedOutline />}
        />
        <Link to="/forgot">Esqueceu a senha?</Link>
        <Button type="submit" size="full" btnStyle="square">
          Entrar
        </Button>
        <div className="paragraph">
          Não tem conta?
          <Link to="/signup">Cadastre-se</Link>
        </div>
      </form>
    </section>
  );
};
