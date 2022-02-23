import { Link } from "react-router-dom";
import { TiPowerOutline, TiUserOutline } from "react-icons/ti";

import "./styles.scss";

import useAuth from "hooks/useAuth";

const Avatar = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="avatar-wrapper">
      <Link to="/" onClick={signOut}>
        <TiPowerOutline />
      </Link>
      <div className="photo">{!!!user?.photoURL && <TiUserOutline />}</div>
    </div>
  );
};

export default Avatar;
