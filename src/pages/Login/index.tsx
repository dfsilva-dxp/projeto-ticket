import { Outlet } from "react-router-dom";

import { FormContainer, FooterContainer } from "containers";

import { Container, Wrapper } from "./styles";

const Login = () => {
  return (
    <Wrapper>
      <Container>
        <FormContainer>
          <Outlet />
        </FormContainer>
      </Container>
      <FooterContainer />
    </Wrapper>
  );
};

export default Login;
