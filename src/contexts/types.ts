import { ReactNode } from "react";

export type FirebaseContextProps = {
  children: ReactNode;
};

export type Customer = {
  uid: string;
  email: string | null;
  displayName: string | number | readonly string[] | undefined | null;
  photoURL?: string | null;
};

export type Credentials = {
  email: string;
  password: string;
};

export type RegistrationData = {
  name: string;
} & Credentials;

export type FirebaseContextData = {
  user: Customer | null;
  loading: boolean;
  signIn: (credentials: Credentials) => Promise<void>;
  signUp: (signUpData: RegistrationData) => Promise<void>;
  signOut: () => Promise<void>;
  updateDataCustomer: (data: FirebaseUpdateData) => void;
};

export type FirebaseUpdateData = {
  displayName?: string | null;
  photo?: string | null;
};
