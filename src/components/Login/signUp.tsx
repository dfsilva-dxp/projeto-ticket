import { FormEvent, useRef } from "react";
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
import { Display, Form } from "components";

const SignUp = () => {
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
        description="Cadastre-se já para acompanhar todos os seus chamados."
      />

      <Form.Content>
        <Form.Base onSubmit={handleSubmit}>
          <Form.Title>Crie sua conta</Form.Title>
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
          <Form.Button type="submit" size="full" btnStyle="square">
            Cadastrar
          </Form.Button>
        </Form.Base>
      </Form.Content>

      <Display>
        <Display.Text>Junte-se a nós!</Display.Text>
        <Display.Title>
          Cadastre-se já para <br />
          acompanhar os seus <br />
          <Display.Strong> chamados.</Display.Strong>
        </Display.Title>
        <Display.Link to={`${route.LOGIN.SIGNIN}`}>
          <TiArrowLeft />
          Voltar para login
        </Display.Link>
      </Display>
    </>
  );
};

export default SignUp;
