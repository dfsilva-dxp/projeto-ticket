import {
  // ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactElement,
} from "react";

import "./styles.scss";

type InputProps = {
  icon?: ReactElement;
  value?: string | ReadonlyArray<string> | number | undefined | null;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ icon, value, ...props }: InputProps) => {
  return (
    <div className="input-group">
      <input
        className={!!icon ? "input-control padding-icon" : "input-control"}
        value={value}
        {...props}
      />
      {!!icon && <span className="icon">{icon}</span>}
    </div>
  );
};

export default Input;
