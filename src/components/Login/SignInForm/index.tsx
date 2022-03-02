import { FormEvent, useRef } from "react";
import { Link } from "react-router-dom";
import { TiLockClosedOutline, TiMail } from "react-icons/ti";

import { route } from "constants/routes";
import useAuth from "hooks/useAuth";

import { Head } from "components/Head";
import { Input } from "components/Input";
import Button from "components/Button";

const SignInForm = () => {
  const { authenticate } = useAuth();

  const emailElRef = useRef<HTMLInputElement>(null);
  const passwordElRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (emailElRef.current && passwordElRef.current) {
      const email = emailElRef.current.value;
      const password = passwordElRef.current.value;

      authenticate({ email, password });
    }
  }

  return (
    <>
      <Head
        title="Log in | ticket.app"
        description="Faça login e acesse os seus chamados."
      />

      <section className="wrapper-form float-left">
        <div className="display-text">
          <p>Bem-vindo (a) ao ticket.app, seus sistema de chamados.</p>
          <h1>
            Faça login e acesse <br />
            os seus <span> chamados.</span>
          </h1>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <h2>Log in</h2>
          <Input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Seu e-mail"
            icon={<TiMail />}
            ref={emailElRef}
          />
          <Input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Sua senha"
            icon={<TiLockClosedOutline />}
            ref={passwordElRef}
          />
          <Link to={`/${route.LOGIN.FORGOT}`}>Esqueceu a senha?</Link>
          <Button type="submit" size="full" btnStyle="square">
            Entrar
          </Button>
          <div className="paragraph">
            Não tem conta?
            <Link to={`/${route.LOGIN.SIGNUP}`}>Cadastre-se</Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default SignInForm;
