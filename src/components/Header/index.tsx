import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";

import Avatar from "components/Avatar";
import { route } from "constants/routes";

import "./styles.scss";

const Header = () => {
  const { user } = useAuth();
  return (
    <div className="header">
      <div className="nav-content">
        <Link to={route.APP.CALLEDS.ALL}>
          <img
            src="./assets/logo.svg"
            alt="Headset"
            title="Headset amarelo que representa o logo do app"
          />
        </Link>
        <Avatar user={user} />
      </div>
    </div>
  );
};

export default Header;
