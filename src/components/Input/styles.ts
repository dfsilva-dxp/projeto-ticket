import styled, { css } from "styled-components";

export const IconContainer = styled.span`
  position: absolute;
  top: 0;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  display: grid;
  place-items: center;
`;

type InputControlProps = {
  hasIcon: boolean;
};

export const InputControl = styled.input<InputControlProps>`
  width: 100%;
  height: 3rem;
  background-color: var(--gray-900);
  padding: 0 1rem;
  border-radius: 0.25rem;
  border: 1px solid var(--gray-750);
  outline: 0;
  background-clip: padding-box;
  font-size: 1rem;
  line-height: 1.5;

  ${({ hasIcon }) =>
    hasIcon &&
    css`
      padding-left: 3.5rem;
      padding-right: 3.5rem;
    `}

  &::placeholder {
    color: var(--gray-300);
  }

  &:hover:not(:disabled):not([readonly]),
  &:focus:not(:disabled):not([readonly]) {
    border-color: var(--yellow-500);
  }
`;

export const Group = styled.div`
  position: relative;
  transition: all 0.1s ease-out;

  & ${InputControl}:hover:not(:disabled):not([readonly]) ~ ${IconContainer} {
    color: var(--yellow-500);
  }
  & ${InputControl}:focus:not(:disabled):not([readonly]) ~ ${IconContainer} {
    color: var(--yellow-500);
  }
`;
