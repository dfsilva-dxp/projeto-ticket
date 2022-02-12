import {
  // ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactElement,
} from "react";

import "./styles.scss";

type InputProps = {
  icon?: ReactElement;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ icon, ...props }: InputProps) => {
  return (
    <div className="input-group">
      <input
        className={!!icon ? "input-control padding-icon" : "input-control"}
        {...props}
      />
      {!!icon && <span className="icon">{icon}</span>}
    </div>
  );
};
