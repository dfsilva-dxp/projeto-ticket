import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";

import { route } from "constants/routes";

import "./styles.scss";
import { Avatar } from "components";
import { TiUserOutline } from "react-icons/ti";

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
        <Avatar>
          <Avatar.Wrapper>
            <Avatar.Photo photoURL={user?.photoURL}>
              <TiUserOutline />
            </Avatar.Photo>
          </Avatar.Wrapper>
          <Avatar.Content>
            <Avatar.Name displayName={user?.displayName} />
            <Avatar.Email email={user?.email} />
          </Avatar.Content>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
