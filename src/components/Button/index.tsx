import { ButtonHTMLAttributes, ReactNode } from "react";

import "./styles.scss";

type ButtonProps = {
  children?: ReactNode;
  color?: "default" | "white" | "gray";
  size?: "small" | "medium" | "full";
  btnStyle?: "square" | "round";
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  color = "default",
  size = "medium",
  btnStyle = "round",
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`button-control ${color} ${size} ${btnStyle}`}
      {...props}
    >
      {!!icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
