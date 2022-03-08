import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Nav = styled.nav`
  display: grid;
  gap: 2.5rem;
`;

export const NavSection = styled.div`
  display: grid;
  gap: 1rem;
`;

export const Title = styled.h4`
  font-size: 0.875rem;
  color: var(--gray-400);
  text-transform: uppercase;
`;

export const Link = styled(RouterLink)`
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--gray-100);
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.2s ease-in-out;
  padding-left: 0.625rem;

  svg {
    margin-right: 0.875rem;
    font-size: 1.125rem;
  }
  &.active,
  &:hover {
    color: var(--yellow-500);
  }
`;
