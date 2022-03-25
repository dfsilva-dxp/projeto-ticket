import { ReactNode } from "react";

export type FooterProps = {
  children: ReactNode;
};

export type CopyrightProps = Pick<FooterProps, "children">;

export type StrongProps = Pick<FooterProps, "children">;
