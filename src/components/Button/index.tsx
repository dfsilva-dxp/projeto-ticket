import { ButtonProps } from "./types";

import { Button as Btn } from "./styles";

const Button = ({
  children,
  color = "default",
  size = "medium",
  btnStyle = "round",
  icon,
  ...props
}: ButtonProps) => {
  return (
    <Btn
      size={size}
      btnStyle={btnStyle}
      color={color}
      hasIcon={!!icon}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </Btn>
  );
};

export default Button;
