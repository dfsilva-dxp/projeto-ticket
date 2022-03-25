import { Link, Nav, NavSection, Title } from "./styles";
import {
  CustomLinkProps,
  NavigationProps,
  NavSectionProps,
  TitleProps,
} from "./types";

export default function Navigation({ children }: NavigationProps) {
  return <Nav>{children}</Nav>;
}

Navigation.NavSection = function NavigationNavSection({
  children,
}: NavSectionProps) {
  return <NavSection>{children}</NavSection>;
};

Navigation.Title = function NavigationTitle({ title }: TitleProps) {
  return <Title>{title}</Title>;
};

Navigation.Link = function NavigationLink({
  icon,
  label,
  ...props
}: CustomLinkProps) {
  return (
    <Link {...props}>
      {icon}
      {label}
    </Link>
  );
};
