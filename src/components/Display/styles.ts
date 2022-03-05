import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 3.375rem;
  line-height: 1;
  font-weight: 700;
`;

export const Text = styled.p`
  margin-bottom: 1.25rem;
`;

export const Strong = styled.strong`
  color: var(--yellow-500);
  text-transform: uppercase;
`;

export const Link = styled(RouterLink)`
  color: var(--yellow-500);
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  margin-top: 1rem;

  svg {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`;
