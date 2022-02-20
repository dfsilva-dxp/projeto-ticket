import Avatar from "components/Avatar";

import "./styles.scss";
import Logo from "components/Logo";
import { NavLink } from "react-router-dom";
import { route } from "constants/routes";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <nav>
        <ul>
          <li>
            <NavLink to={`/${route.APP.HOME}`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/${route.APP.CUSTOMERS}`}>Clientes</NavLink>
          </li>
        </ul>
      </nav>
      <Avatar />
    </div>
  );
};

export default Header;
