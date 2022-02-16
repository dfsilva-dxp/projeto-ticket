import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  TiArrowLeft,
  TiLockClosedOutline,
  TiMail,
  TiUserOutline,
} from "react-icons/ti";

import { routes } from "../../../constants/routes";
import useAuth from "../../../hooks/useAuth";
import useForm from "../../../hooks/useForm";
import { Credentials } from "../../../contexts/auth";

import { PageHead } from "../../PageHead";
import { Button } from "../../Button";
import { Input } from "../../Input";

import "./styles.scss";

function initialState() {
  return {
    name: "",
    email: "",
    password: "",
  };
}

export const SignUpForm = () => {
  const [credentials, setCredentials] = useState<Credentials>(initialState);

  const history = useHistory();
  const { signUp } = useAuth();
  const { onChange } = useForm();

  async function handleSignUp(e: FormEvent) {
    e.preventDefault();
    await signUp(credentials);
    setCredentials(initialState);
    history.push("/");
  }

  return (
    <>
      <PageHead
        title="Cadastro | ticket"
        description="Cadastre-se já para acompanhar os seus chamados."
      />

      <section className="wrapper-signup float-left">
        <form className="signup-form" onSubmit={handleSignUp}>
          <h2>Crie sua conta</h2>
          <Input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Seu nome"
            icon={<TiUserOutline />}
            onChange={(e) => onChange(e)(credentials, setCredentials)}
          />
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
          <Link to={routes.LOGIN}>
            <TiArrowLeft />
            Voltar para login
          </Link>
        </div>
      </section>
    </>
  );
};
