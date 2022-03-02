import { FormEvent, useRef } from "react";
import { Link } from "react-router-dom";
import {
  TiArrowLeft,
  TiLockClosedOutline,
  TiMail,
  TiUserOutline,
} from "react-icons/ti";

import { route } from "constants/routes";
import useAuth from "hooks/useAuth";

import { Head } from "components/Head";
import { Input } from "components/Input";
import Button from "components/Button";

const SignUpForm = () => {
  const { signUp } = useAuth();

  const nameElRef = useRef<HTMLInputElement>(null);
  const emailElRef = useRef<HTMLInputElement>(null);
  const passwordElRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (nameElRef.current && emailElRef.current && passwordElRef.current) {
      const name = nameElRef.current.value;
      const email = emailElRef.current.value;
      const password = passwordElRef.current.value;

      signUp({ name, email, password });
    }
  }

  return (
    <>
      <Head
        title="Cadastro | ticket"
        description="Cadastre-se já para acompanhar os seus chamados."
      />

      <section className="wrapper-form float-left">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Crie sua conta</h2>
          <Input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Seu nome"
            icon={<TiUserOutline />}
            ref={nameElRef}
          />
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
          <Button type="submit" size="full" btnStyle="square">
            Cadastrar
          </Button>
        </form>

        <div className="display-text">
          <p>junte-se a nós!</p>
          <h1>
            Cadastre-se já para <br />
            acompanhar os seus <br />
            <span> chamados.</span>
          </h1>
          <Link to={`${route.LOGIN.SIGNIN}`}>
            <TiArrowLeft />
            Voltar para login
          </Link>
        </div>
      </section>
    </>
  );
};

export default SignUpForm;
