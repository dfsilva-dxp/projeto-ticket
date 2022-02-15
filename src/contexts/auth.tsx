import { createContext, ReactNode, useEffect, useState } from "react";

import firebase from "../services/firebase-connection";

type AuthProviderProps = {
  children: ReactNode;
};

export type User = {
  uid: string;
  email: string;
  name: string;
  avatar_url?: string | null;
};

export type Credentials = {
  email: string;
  password: string;
};

export type SignUpData = {
  name: string;
} & Credentials;

type AuthContextData = {
  user: User | null;
  isSigned: boolean;
  loading: boolean;
  signUp: (signUpData: SignUpData) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext({} as AuthContextData);

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSigned, setIsSigned] = useState(!!user);

  useEffect(() => {}, []);

  async function signUp({ name, email, password }: SignUpData) {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => user);

    if (response) {
      const { uid, refreshToken } = response;

      const customer = { uid, email, name };

      await createCustomer(customer);
    }
  }

  async function signOut() {
    await firebase.auth().signOut();
    setUser(null);
  }

  async function createCustomer({ uid, name, email, avatar_url = null }: User) {
    await firebase.firestore().collection("customers").doc(uid).set({
      uid,
      name,
      email,
      avatar_url,
    });
  }

  return (
    <AuthContext.Provider value={{ user, isSigned, loading, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
