import { ReactNode } from "react";

import firebase from "services/firebase-connection";

export type AuthProviderProps = {
  children: ReactNode;
};

export type Customer = {
  uid: string;
  email: string | null;
  displayName: string | number | readonly string[] | undefined | null;
  photoURL?: string | null;
};

export type Credentials = {
  name?: string;
  email: string;
  password: string;
};

export type DataUpdateCustomer = {
  displayName?: string | null;
  photo?: string | null;
};

export type AuthContextData = {
  user: Customer | null;
  loading: boolean;
  signIn: (credentials: Credentials) => Promise<void>;
  signUp: (signUpData: Credentials) => Promise<void>;
  signOut: () => Promise<void>;
  setUser: (user: firebase.User | null) => void;
};
