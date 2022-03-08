import {
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";
import { LinkProps } from "react-router-dom";

export type FormsProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export type BoxProps = FormsProps;

export type BaseProps = FormHTMLAttributes<HTMLFormElement> &
  Pick<FormsProps, "children">;

export type TitleProps = HTMLAttributes<HTMLHeadingElement> &
  Pick<FormsProps, "children">;

export type CustomLinkProps = LinkProps & Pick<FormsProps, "children">;

export type TextProps = HTMLAttributes<HTMLParagraphElement> &
  Pick<FormsProps, "children">;

export type ButtonProps = {
  size?: "small" | "medium" | "full";
  color?: "default" | "white" | "gray";
  btnStyle?: "square" | "round";
  icon?: JSX.Element;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  Pick<FormsProps, "children">;
