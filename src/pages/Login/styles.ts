import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 5rem calc(100vh - 10rem) 5rem;

  &::before {
    content: "";
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1152px;
  }
`;
