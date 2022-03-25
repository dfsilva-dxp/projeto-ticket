import { LayoutProps } from "./types";
import { Container, Content } from "./styles";

export default function Layout({ children }: LayoutProps) {
  return <Container>{children}</Container>;
}

Layout.Content = function LayoutContent({ children }: LayoutProps) {
  return <Content>{children}</Content>;
};
