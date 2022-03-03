import { JumbotronProps } from "./types";

import "./styles.scss";

const Jumbotron = ({ children }: JumbotronProps) => {
  return <div className="jumbotron">{children}</div>;
};

export default Jumbotron;
