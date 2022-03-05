import { ButtonHTMLAttributes, ReactNode } from "react";

import "./styles.scss";

export type ButtonProps = {
  children?: ReactNode;
  size?: "small" | "medium" | "full";
  color?: "default" | "white" | "gray";
  btnStyle?: "square" | "round";
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
