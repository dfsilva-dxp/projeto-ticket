import styled from "styled-components";

export const Content = styled.div`
  background-color: var(--gray-800);
  display: grid;
  place-items: center;
`;
export const Copyright = styled.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  transition: color 0.2s ease-out;

  &:hover {
    color: var(--white);
  }
`;
export const Strong = styled.strong`
  color: var(--yellow-500);
`;
