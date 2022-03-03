import firebase from "services/firebase-connection";

export type AvatarProps = {
  user?: firebase.User | null;
};
