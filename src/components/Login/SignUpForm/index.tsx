import { Link } from "react-router-dom";
import {
  TiArrowLeft,
  TiLockClosedOutline,
  TiMail,
  TiUserOutline,
} from "react-icons/ti";

import { routes } from "../../../constants/routes";

import { PageHead } from "../../PageHead";
import { Button } from "../../Button";
import { Input } from "../../Input";

import "./styles.scss";
import useForm from "../../../hooks/useOnChange";
import { FormEvent, useState } from "react";
import { SignUpData } from "../../../contexts/auth";
import useAuth from "../../../hooks/useAuth";

function initialSignUpValues() {
  return {
    name: "",
    email: "",
    password: "",
  };
}

export const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState<SignUpData>(
    initialSignUpValues()
  );
  const { onChange } = useForm();
  const { signUp } = useAuth();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await signUp(signUpData);
    setSignUpData(initialSignUpValues());
  }

  return (
    <>
      <PageHead
        title="Cadastro | ticket"
        description="Cadastre-se já para acompanhar os seus chamados."
      />

      <section className="wrapper-signup float-left">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Crie sua conta</h2>
          <Input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Seu nome"
            icon={<TiUserOutline />}
            onChange={(e) => onChange(e)(signUpData, setSignUpData)}
          />
          <Input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Seu e-mail"
            icon={<TiMail />}
            onChange={(e) => onChange(e)(signUpData, setSignUpData)}
          />
          <Input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Sua senha"
            icon={<TiLockClosedOutline />}
            onChange={(e) => onChange(e)(signUpData, setSignUpData)}
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
