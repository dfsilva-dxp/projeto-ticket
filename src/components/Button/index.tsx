import { ButtonHTMLAttributes, ReactNode } from "react";

import "./styles.scss";

type ButtonProps = {
  children: ReactNode;
  color?: "default" | "white" | "gray";
  size?: "small" | "medium" | "full";
  btnStyle?: "square" | "round";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  color = "default",
  size = "medium",
  btnStyle = "round",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`button-control ${color} ${size} ${btnStyle}`}
      {...props}
    >
      {children}
    </button>
  );
};
