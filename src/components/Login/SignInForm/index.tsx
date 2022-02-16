import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { TiLockClosedOutline, TiMail } from "react-icons/ti";

import { routes } from "../../../constants/routes";
import useAuth from "../../../hooks/useAuth";
import useForm from "../../../hooks/useForm";
import { Credentials } from "../../../contexts/auth";

import { PageHead } from "../../PageHead";
import { Input } from "../../Input";
import { Button } from "../../Button";

import "./styles.scss";

function initialState() {
  return {
    email: "",
    password: "",
  };
}

export const SignInForm = () => {
  const [credentials, setCredentials] = useState<Credentials>(initialState);

  const history = useHistory();
  const { signIn } = useAuth();
  const { onChange } = useForm();

  async function handleSignIn(e: FormEvent) {
    e.preventDefault();
    await signIn(credentials);
    setCredentials(initialState());
    history.push("/dashboard");
  }

  return (
    <>
      <PageHead
        title="Log in | ticket"
        description="Faça login e acesse os seus chamados."
      />

      <section className="wrapper-signin float-left">
        <div className="display-text">
          <p>Bem-vindo (a) ao ticket, seus sistema de chamados.</p>
          <h1>
            Faça login e acesse os <br />
            seus <span> chamados.</span>
          </h1>
        </div>

        <form className="signin-form" onSubmit={handleSignIn}>
          <h2>Log in</h2>
          <Input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Seu e-mail"
            icon={<TiMail />}
            onChange={(e) => onChange(e)(credentials, setCredentials)}
          />
          <Input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Sua senha"
            icon={<TiLockClosedOutline />}
            onChange={(e) => onChange(e)(credentials, setCredentials)}
          />
          <Link to={`/${routes.FORGOT}`}>Esqueceu a senha?</Link>
          <Button type="submit" size="full" btnStyle="square">
            Entrar
          </Button>
          <div className="paragraph">
            Não tem conta?
            <Link to={`/${routes.SIGN_UP}`}>Cadastre-se</Link>
          </div>
        </form>
      </section>
    </>
  );
};
