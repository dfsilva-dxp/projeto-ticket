import { ButtonHTMLAttributes, ReactNode } from "react";

import "./styles.scss";

export type ButtonProps = {
  children?: ReactNode;
  color?: "default" | "white" | "gray";
  size?: "small" | "medium" | "full";
  btnStyle?: "square" | "round";
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
