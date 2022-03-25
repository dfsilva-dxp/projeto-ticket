import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export type NavigationProps = {
  children: ReactNode;
};

export type NavSectionProps = Pick<NavigationProps, "children">;

export type TitleProps = {
  title: string;
};

export type CustomLinkProps = {
  icon: ReactNode;
  label: string;
} & LinkProps;
