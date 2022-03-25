import { ImgHTMLAttributes, ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export type HeaderProps = {
  children: ReactNode;
};

export type ContentProps = Pick<HeaderProps, "children">;

export type CustomLinkProps = LinkProps & Pick<HeaderProps, "children">;

export type ImageProps = ImgHTMLAttributes<HTMLElement>;
