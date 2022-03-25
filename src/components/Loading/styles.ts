import styled, { css } from "styled-components";

import { SpinnerProps } from "./types";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

const spinnerModifier = {
  sm: () => css`
    width: 65px;
    height: 20px;

    & div {
      top: 5px;
      width: 8px;
      height: 8px;
    }
    & div:nth-child(1) {
      left: 0px;
    }
    & div:nth-child(2) {
      left: 0px;
    }
    & div:nth-child(3) {
      left: 25px;
    }
    & div:nth-child(4) {
      left: 49px;
    }
  `,
  md: () => css`
    width: 80px;
    height: 30px;

    & div {
      top: 7px;
      width: 13px;
      height: 13px;
    }
    & div:nth-child(1) {
      left: 8px;
    }
    & div:nth-child(2) {
      left: 8px;
    }
    & div:nth-child(3) {
      left: 32px;
    }
    & div:nth-child(4) {
      left: 56px;
    }
  `,
};

export const Spinner = styled.div<SpinnerProps>`
  ${({ size }) => css`
    display: inline-block;
    position: relative;

    ${!!size && spinnerModifier[size]}

    & div {
      position: absolute;
      border-radius: 50%;
      background: var(--white);
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    & div:nth-child(1) {
      animation: lds-ellipsis1 0.4s infinite ease-in-out;
    }
    & div:nth-child(2) {
      animation: lds-ellipsis2 0.4s infinite ease-in-out;
    }
    & div:nth-child(3) {
      animation: lds-ellipsis2 0.4s infinite ease-in-out;
    }
    & div:nth-child(4) {
      animation: lds-ellipsis3 0.4s infinite ease-in-out;
    }

    @keyframes lds-ellipsis1 {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes lds-ellipsis3 {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
    @keyframes lds-ellipsis2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(24px, 0);
      }
    }
  `}
`;
