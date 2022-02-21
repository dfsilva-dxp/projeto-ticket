import { TiPowerOutline, TiUserOutline } from "react-icons/ti";

import useAuth from "hooks/useAuth";

import "./styles.scss";
import { Link } from "react-router-dom";

const Avatar = () => {
  const { user } = useAuth();

  return (
    <div className="avatar-wrapper">
      <Link to="/">
        <TiPowerOutline />
      </Link>
      <div className="photo">{!!!user?.photoURL && <TiUserOutline />}</div>
    </div>
  );
};

export default Avatar;
