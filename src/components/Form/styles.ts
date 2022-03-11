import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import { ButtonProps } from "./types";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  height: 100%;

  opacity: 0;
  transform: translateX(-20px);
  animation: floatLeft 0.3s forwards;

  @keyframes floatLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

export const Box = styled.div`
  background-color: var(--gray-800);
  width: min(480px, 100%);
  border-radius: 0.5rem;
  padding: 4rem;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Inline = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
`;

export const Link = styled(RouterLink)`
  color: var(--yellow-500);
  margin-left: 0.625rem;
  text-align: right;
  font-size: 0.875rem;
  transition: color 0.2s;
  text-decoration: underline;
`;

export const Text = styled.p`
  text-align: center;
`;

const buttonModifiers = {
  small: () => css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
  `,

  medium: () => css`
    padding: 0.5em 1rem;
  `,

  full: () => css`
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
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
    display: block;
    border: 0;
    outline: 0;
    vertical-align: middle;
    user-select: none;
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
