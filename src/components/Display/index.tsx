import {
  CustomLinkProps as LinkProps,
  DisplayProps,
  StrongProps,
  TextProps,
  TitleProps,
} from "./types";

import { Container, Link, Strong, Text, Title } from "./styles";

export default function Display({ children }: DisplayProps) {
  return <Container>{children}</Container>;
}

Display.Title = function DisplayTitle({ children }: TitleProps) {
  return <Title>{children}</Title>;
};

Display.Text = function DisplayText({ children }: TextProps) {
  return <Text>{children}</Text>;
};

Display.Strong = function DisplayStrong({ children }: StrongProps) {
  return <Strong>{children}</Strong>;
};

Display.Link = function DisplayLink({ children, ...props }: LinkProps) {
  return <Link {...props}>{children}</Link>;
};
