import { Link } from "react-router-dom";
import {
  TiArrowLeft,
  TiLockClosedOutline,
  TiMail,
  TiUserOutline,
} from "react-icons/ti";

import { PageHead } from "../../PageHead";
import { Button } from "../../Button";
import { Input } from "../../Input";

import "./styles.scss";

export const SignUpForm = () => {
  return (
    <>
      <PageHead
        title="Cadastro | ticket"
        description="Cadastre-se já para acompanhar os seus chamados."
      />
      <section className="wrapper-signup float-left">
        <form action="" className="signup-form">
          <h2>Crie sua conta</h2>
          <Input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Seu nome"
            icon={<TiUserOutline />}
          />
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
          <Link to="/">
            <TiArrowLeft />
            Voltar para login
          </Link>
        </div>
      </section>
    </>
  );
};
