import { Title } from "./styles";
import { TitleProps } from "./types";

export default function PageTitle({ label }: TitleProps) {
  return <Title>{label}</Title>;
}
