import { NavLink } from "react-router-dom";
import { TiPowerOutline, TiUserOutline } from "react-icons/ti";
import { RiHome8Line, RiSettings5Line } from "react-icons/ri";

import "./styles.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/home">
            <RiHome8Line />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/customers">
            <TiUserOutline />
            Clientes
          </NavLink>
        </li>
        <li>
          <NavLink to="/configurations">
            <RiSettings5Line />
            Configurações
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <TiPowerOutline />
            Sair
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
