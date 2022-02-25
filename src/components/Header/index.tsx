import { Link } from "react-router-dom";

import Avatar from "components/Avatar";
import { route } from "constants/routes";

import "./styles.scss";

const Header = () => {
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
        <Avatar
          user={{
            uid: "10",
            name: "Daniel Silva",
            email: "dfsilva.dxp@gmail.com",
            photoURL: "https://avatars.githubusercontent.com/u/16245261?v=4",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
