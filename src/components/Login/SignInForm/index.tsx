import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TiLockClosedOutline, TiMail } from "react-icons/ti";

import { Credentials } from "contexts/auth/types";

import useAuth from "hooks/useAuth";
import useForm from "hooks/useForm";

import { PageHead } from "components/PageHead";
import { Input } from "components/Input";
import { Button } from "components/Button";

import "./styles.scss";

function initialState() {
  return {
    email: "",
    password: "",
  };
}

export const SignInForm = () => {
  const [credentials, setCredentials] = useState<Credentials>(initialState);

  const { authenticate } = useAuth();
  const { onChange } = useForm();

  useEffect(() => {
    return () => {
      setCredentials(initialState());
    };
  }, []);

  async function handleSignIn(e: FormEvent) {
    e.preventDefault();
    await authenticate(credentials);
    setCredentials(initialState());
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
          <Link to={`/forgot`}>Esqueceu a senha?</Link>
          <Button type="submit" size="full" btnStyle="square">
            Entrar
          </Button>
          <div className="paragraph">
            Não tem conta?
            <Link to={`/signup`}>Cadastre-se</Link>
          </div>
        </form>
      </section>
    </>
  );
};
