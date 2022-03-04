import { TitleProps } from "./types";

import "./styles.scss";

const Title = ({ label }: TitleProps) => {
  return <h2 className="title">{label}</h2>;
};

export default Title;
