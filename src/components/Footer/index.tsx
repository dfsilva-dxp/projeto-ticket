import { Content, Copyright, Strong } from "./styles";
import { CopyrightProps, FooterProps, StrongProps } from "./types";

export default function Footer({ children }: FooterProps) {
  return <Content>{children}</Content>;
}

Footer.Copyright = function FooterCopyright({ children }: CopyrightProps) {
  return <Copyright>{children}</Copyright>;
};

Footer.Strong = function FooterStrong({ children }: StrongProps) {
  return <Strong>{children}</Strong>;
};
