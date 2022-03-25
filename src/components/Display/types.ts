import { HTMLAttributes, ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export type DisplayProps = {
  children: ReactNode;
};

export type TitleProps = HTMLAttributes<HTMLHeadingElement> &
  Pick<DisplayProps, "children">;

export type TextProps = HTMLAttributes<HTMLParagraphElement> &
  Pick<DisplayProps, "children">;

export type StrongProps = HTMLAttributes<HTMLParagraphElement> &
  Pick<DisplayProps, "children">;

export type CustomLinkProps = LinkProps & Pick<DisplayProps, "children">;
