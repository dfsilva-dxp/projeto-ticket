import { NavLink } from "react-router-dom";

import { NavLinkProps } from "./types";

import "./styles.scss";

const NavLinks = ({ icon, label, href }: NavLinkProps) => {
  return (
    <div className="navlink">
      <NavLink to={href}>
        {icon}
        {label}
      </NavLink>
    </div>
  );
};

export default NavLinks;
