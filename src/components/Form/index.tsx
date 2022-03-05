import {
  Base,
  Button as Btn,
  Container,
  Content,
  Link,
  Text,
  Title,
} from "./styles";

import {
  BaseProps,
  ButtonProps,
  ContentProps,
  CustomLinkProps as LinkProps,
  FormsProps,
  TextProps,
  TitleProps,
} from "./types";

export default function Form({ children, ...props }: FormsProps) {
  return <Container {...props}>{children}</Container>;
}

Form.Content = function FormContent({ children, ...props }: ContentProps) {
  return <Content {...props}>{children}</Content>;
};

Form.Base = function formBase({ children, ...props }: BaseProps) {
  return <Base {...props}>{children}</Base>;
};

Form.Title = function formTitle({ children, ...props }: TitleProps) {
  return <Title {...props}>{children}</Title>;
};

Form.Link = function formLink({ children, ...props }: LinkProps) {
  return <Link {...props}>{children}</Link>;
};

Form.Text = function formText({ children, ...props }: TextProps) {
  return <Text {...props}>{children}</Text>;
};

Form.Button = function formButton({
  children,
  color = "default",
  size = "medium",
  btnStyle = "round",
  icon,
  ...props
}: ButtonProps) {
  return (
    <Btn
      size={size}
      btnStyle={btnStyle}
      color={color}
      hasIcon={!!icon}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </Btn>
  );
};
