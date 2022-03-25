import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  user-select: none;
`;

type WrapperProps = {
  size: "normal" | "large";
};

const wrapperModifiers = {
  normal: () => css`
    width: 3.25rem;
    height: 3.25rem;
    padding: 0.15rem;
    font-size: 1.25rem;
  `,
  large: () => css`
    width: 7rem;
    height: 7rem;
    padding: 0.25rem;
    font-size: 3rem;
    position: relative;
    overflow: hidden;
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ size }) => css`
    border: 3px solid var(--gray-700);
    color: var(--green-500);
    border-radius: 50%;
    display: grid;
    place-items: center;
    background-color: var(--gray-800);

    ${!!size && wrapperModifiers[size]};

    &:hover ${Editor} {
      transform: translateY(60px);
    }
  `}
`;

export const Editor = styled.label`
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 0.75rem;
  color: var(--white);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  transform: translateY(110px);
`;

export const File = styled.input`
  &[type="file"] {
    display: none;
  }
`;

type PhotoProps = {
  BackgroundUrl: string | null;
};

export const Photo = styled.div<PhotoProps>`
  ${({ BackgroundUrl }) => css`
    width: 100%;
    height: 100%;
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
