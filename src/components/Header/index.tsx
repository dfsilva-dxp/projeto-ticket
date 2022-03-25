import { ContentProps, CustomLinkProps, HeaderProps } from "./types";

import { Container, Content, Image, Link } from "./styles";

export default function Header({ children }: HeaderProps) {
  return <Container>{children}</Container>;
}

Header.Content = function HeaderContent({ children }: ContentProps) {
  return <Content>{children}</Content>;
};

Header.Link = function HeaderLink({ children, ...props }: CustomLinkProps) {
  return <Link {...props}>{children}</Link>;
};

Header.Logo = function HeaderLogo({ ...props }) {
  return <Image {...props} />;
};
