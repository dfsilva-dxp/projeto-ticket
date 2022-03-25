import { CopyrightProps, FooterProps, StrongProps } from "./types";

import { Content, Copyright, Strong } from "./styles";

export default function Footer({ children }: FooterProps) {
  return <Content>{children}</Content>;
}

Footer.Copyright = function FooterCopyright({ children }: CopyrightProps) {
  return <Copyright>{children}</Copyright>;
};

Footer.Strong = function FooterStrong({ children }: StrongProps) {
  return <Strong>{children}</Strong>;
};
