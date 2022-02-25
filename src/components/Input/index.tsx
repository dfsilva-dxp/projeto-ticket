import { forwardRef, ForwardRefRenderFunction } from "react";

import { InputProps } from "./types";

import "./styles.scss";

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { icon, ...props },
  ref
) => {
  return (
    <div className="input-group">
      <input
        className={!!icon ? "input-control padding-icon" : "input-control"}
        {...props}
        ref={ref}
      />
      {!!icon && <span className="icon">{icon}</span>}
    </div>
  );
};

export const Input = forwardRef(InputDefault);
