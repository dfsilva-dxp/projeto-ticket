import { NavLink } from "react-router-dom";

import { route } from "constants/routes";

import Logo from "components/Logo";
import Avatar from "components/Avatar";

import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container grid">
        <Logo />
        <nav>
          <ul>
            <li>
              <NavLink to={`/${route.APP.HOME}`}>Home</NavLink>
            </li>
            <li>
              <NavLink to={`/${route.APP.CUSTOMERS}`}>Clientes</NavLink>
            </li>
            <li>
              <NavLink to={`/${route.APP.CONFIGURATIONS}`}>
                Configurações
              </NavLink>
            </li>
          </ul>
        </nav>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
