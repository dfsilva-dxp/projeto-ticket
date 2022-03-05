import styled, { css } from "styled-components";

import { ButtonProps } from "./types";

const buttonModifiers = {
  small: () => css`
    font-size: 0.75rem;
    max-width: 220px;
    padding: 0.25em 1rem;
  `,

  medium: () => css`
    max-width: 320px;
    padding: 0.5em 1rem;
  `,

  full: () => css`
    width: 100%;
    height: 3rem;
    padding: 0 2.25rem;
  `,

  default: () => css`
    background-color: var(--yellow-500);
    color: var(--gray-700);
  `,

  white: () => css`
    background-color: var(--white);
    color: var(--gray-700);
    border: 1px solid var(--gray-750);
  `,

  gray: () => css`
    background-color: var(--gray-800);
    color: var(--yellow-500);
    border: 1px solid var(--gray-750);
  `,

  square: () =>
    css`
      border-radius: 0.25rem;
    `,

  round: () =>
    css`
      border-radius: 50px;
    `,

  withIcon: () => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: 0.5rem;
      }
    }
  `,
};

type BtnProps = {
  hasIcon: boolean;
} & ButtonProps;

export const Button = styled.button<BtnProps>`
  ${({ size, color, btnStyle, hasIcon }) => css`
    display: inline-block;
    border: 0;
    outline: 0;
    vertical-align: middle;
    user-select: none;
    font-size: 0.875rem;
    line-height: 1.5;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out,
      filter 0.15s ease-in-out;

    ${!!color && buttonModifiers[color]}
    ${!!size && buttonModifiers[size]}
    ${!!btnStyle && buttonModifiers[btnStyle]}
    ${!!hasIcon && buttonModifiers.withIcon()}

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;
