import { ReactNode } from "react";

export type AuthProviderProps = {
  children: ReactNode;
};

export type User = {
  uid: string;
  email: string | null;
  name: string | null;
  photoURL?: string | null;
};

export type Credentials = {
  name?: string;
  email: string;
  password: string;
};

export type AuthContextData = {
  user: User | null;
  loading: boolean;
  authenticate: (credentials: Credentials) => Promise<void>;
  signUp: (signUpData: Credentials) => Promise<void>;
  signOut: () => Promise<void>;
};
