import { TiUserOutline } from "react-icons/ti";

import useAuth from "hooks/useAuth";

import "./styles.scss";

const Avatar = () => {
  const { user } = useAuth();

  return (
    <div className="avatar-wrapper">
      <div className="photo">{!!!user?.photoURL && <TiUserOutline />}</div>
    </div>
  );
};

export default Avatar;
