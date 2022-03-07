import { forwardRef, ForwardRefRenderFunction } from "react";

import { InputProps } from "./types";

import { Group, InputControl, IconContainer } from "./styles";

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { icon, ...props },
  ref
) => {
  return (
    <Group>
      <InputControl hasIcon={!!icon} {...props} ref={ref} />
      {!!icon && <IconContainer>{icon}</IconContainer>}
    </Group>
  );
};

const Input = forwardRef(InputDefault);

export default Input;
