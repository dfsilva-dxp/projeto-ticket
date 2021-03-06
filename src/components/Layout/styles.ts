import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1152px;
  max-height: calc(100vh - 6.25rem);
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 13.75rem 1fr;
  gap: 1rem;

  @media (min-width: 1440px) {
    max-width: 1220px;
  }
  @media (min-width: 1512px) {
    max-width: 1480px;
  }
`;
export const Content = styled.section``;
