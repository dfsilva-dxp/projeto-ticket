import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.header`
  height: 6.25rem;
  display: flex;
`;

export const Content = styled.header`
  width: 100%;
  max-width: 1152px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1440px) {
    max-width: 1220px;
  }
  @media (min-width: 1512px) {
    max-width: 1480px;
  }
`;

export const Link = styled(RouterLink)``;
export const Image = styled.img`
  width: 3.25rem;
`;
