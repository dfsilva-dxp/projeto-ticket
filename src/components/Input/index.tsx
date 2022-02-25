import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactElement,
} from "react";

import "./styles.scss";

type InputProps = {
  icon?: ReactElement;
} & InputHTMLAttributes<HTMLInputElement>;

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
