import { ButtonProps } from "./types";

import "./styles.scss";

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
