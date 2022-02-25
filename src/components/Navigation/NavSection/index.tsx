import { NavSectionProps } from "./types";

import "./styles.scss";

const NavSection = ({ title, children }: NavSectionProps) => {
  return (
    <div className="nav-section">
      <h4>{title}</h4>
      <span className="nav-links">{children}</span>
    </div>
  );
};

export default NavSection;
