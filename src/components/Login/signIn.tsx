import { FormEvent, useRef } from "react";
import { TiLockClosedOutline, TiMail } from "react-icons/ti";

import { route } from "constants/routes";
import useAuth from "hooks/useAuth";

import { Display, Form, Head, Input } from "components";

const SignIn = () => {
  const { signIn } = useAuth();

  const emailElRef = useRef<HTMLInputElement>(null);
  const passwordElRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (emailElRef.current && passwordElRef.current) {
      const email = emailElRef.current.value;
      const password = passwordElRef.current.value;

      signIn({ email, password });
    }
  }

  return (
    <>
      <Head
        title="Log in | ticket.app"
        description="Faça login para ter acesso a sua lista de chamados."
      />

      <Display>
        <Display.Text>
          Bem-vindo (a) ao ticket.app, seus sistema de chamados.
        </Display.Text>

        <Display.Title>
          Faça login para ter <br />
          acesso a sua lista de <br />
          <Display.Strong> chamados.</Display.Strong>
        </Display.Title>
      </Display>

      <Form.Content>
        <Form.Base onSubmit={handleSubmit}>
          <Form.Title>Log in</Form.Title>
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
          <Form.Link to={`/${route.LOGIN.FORGOT}`}>Esqueceu a senha?</Form.Link>
          <Form.Button type="submit" size="full" btnStyle="square">
            Entrar
          </Form.Button>
          <Form.Text>
            Não tem conta?
            <Form.Link to={`/${route.LOGIN.SIGNUP}`}>Cadastre-se</Form.Link>
          </Form.Text>
        </Form.Base>
      </Form.Content>
    </>
  );
};

export default SignIn;
