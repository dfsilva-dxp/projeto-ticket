import { createContext, ReactNode, useEffect, useState } from "react";
import useCookies from "../hooks/useCookies";

import firebase from "../services/firebase-connection";

type AuthProviderProps = {
  children: ReactNode;
};

export type Customer = {
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

type AuthContextData = {
  customer: Customer | null;
  loading: boolean;
  signIn: (credentials: Credentials) => Promise<void>;
  signUp: (signUpData: Credentials) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext({} as AuthContextData);

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(false);

  const { set, remove } = useCookies("ticke.refreshToken");

  function session(refreshToken = "") {
    if (!!refreshToken) {
      set(refreshToken);
    } else {
      remove();
    }
  }

  async function signIn({ email, password }: Credentials) {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(({ user }) => user);

      if (response) {
        const { uid, refreshToken, displayName: name, photoURL } = response;

        session(refreshToken);
        setCustomer({
          uid,
          name,
          email,
          photoURL,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function signUp({ name = "", email, password }: Credentials) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      updateCustomer(name);
    } catch (e) {
      console.log(e);
    }
  }

  async function signOut() {
    await firebase.auth().signOut();
    setCustomer(null);
    session();
  }

  function updateCustomer(name: string) {
    const response = firebase.auth().currentUser;
    if (response) {
      response.updateProfile({
        displayName: name,
      });
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { uid, displayName: name, email, photoURL } = user;
        setCustomer({ uid, name, email, photoURL });
      } else {
        setCustomer(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ customer, loading, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
