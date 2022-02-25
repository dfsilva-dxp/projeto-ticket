import { TiUserOutline } from "react-icons/ti";

import { AvatarProps } from "./types";

import "./styles.scss";

const Avatar = ({ user = null }: AvatarProps) => {
  return (
    <div className="avatar-wrapper">
      <div
        className="photo"
        style={{
          backgroundImage: !!user?.photoURL ? `url(${user.photoURL})` : "",
        }}
      >
        {!!!user?.photoURL && <TiUserOutline />}
      </div>
      {user && (
        <div className="user-info">
          <h4>{user.name}</h4>
          <small>{user.email}</small>
        </div>
      )}
    </div>
  );
};

export default Avatar;
