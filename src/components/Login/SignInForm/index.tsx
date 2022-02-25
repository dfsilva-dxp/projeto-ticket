import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TiLockClosedOutline, TiMail } from "react-icons/ti";

import { route } from "constants/routes";

import { Head } from "components/Head";
import { Input } from "components/Input";
import Button from "components/Button";

const SignInForm = () => {
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

        <form className="form">
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
