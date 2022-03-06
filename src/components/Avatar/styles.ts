import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

export const Wrapper = styled.div`
  border: 3px solid var(--gray-700);
  color: var(--green-500);
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 1.25rem;
  background-color: var(--gray-800);
`;

type PhotoProps = {
  BackgroundUrl: string | null;
};

export const Photo = styled.div<PhotoProps>`
  ${({ BackgroundUrl }) => css`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

    ${!!BackgroundUrl &&
    css`
      background-image: url(${BackgroundUrl});
    `}
  `}
`;
export const Content = styled.div``;

export const Name = styled.h4`
  font-size: 0.8125;
  color: var(--gray-200);
`;

export const Email = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
`;
