import { Outlet } from "react-router-dom";

import { FooterContainer } from "containers";

import { Container, Wrapper } from "./styles";

const Login = () => {
  return (
    <Wrapper>
      <Container>
        <Outlet />
      </Container>
      <FooterContainer />
    </Wrapper>
  );
};

export default Login;
