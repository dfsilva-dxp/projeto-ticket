import { InputHTMLAttributes, ReactElement } from "react";

export type InputProps = {
  icon?: ReactElement;
} & InputHTMLAttributes<HTMLInputElement>;
