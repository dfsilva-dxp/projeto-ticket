import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { AuthContextData, AuthProviderProps, Credentials, User } from "./types";

import useCookies from "hooks/useCookies";
import firebase from "services/firebase-connection";
import { route } from "constants/routes";

const AuthContext = createContext({} as AuthContextData);

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setCookie, removeCookie } = useCookies("ticke.refreshToken");

  async function authenticate({ email, password }: Credentials) {
    try {
      setLoading(true);

      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(({ user }) => user);

      if (response) {
        const { uid, refreshToken, displayName: name, photoURL } = response;
        session(refreshToken);
        setUser({
          uid,
          name,
          email,
          photoURL,
        });
      }

      navigate(`/${route.APP.HOME}`);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message, {
          theme: "colored",
          icon: false,
        });
      }
    } finally {
      setLoading(false);
    }
  }

  async function signUp({ name = "", email, password }: Credentials) {
    try {
      setLoading(true);

      await firebase.auth().createUserWithEmailAndPassword(email, password);

      updateCustomer(name);

      toast.success("User cadastrado com sucesso!", {
        theme: "colored",
        icon: false,
      });

      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message, {
          theme: "colored",
          icon: false,
        });
      }
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    await firebase.auth().signOut();
    setUser(null);
    session();
  }

  function updateCustomer(name: string) {
    try {
      const response = firebase.auth().currentUser;
      if (response) {
        response.updateProfile({
          displayName: name,
        });
      }
    } catch (err) {
      if (err instanceof Error) throw new Error(err.message);
    }
  }

  function session(refreshToken = "") {
    if (!!refreshToken) {
      setCookie(refreshToken);
    } else {
      removeCookie();
      navigate(route.LOGIN.SIGNIN);
    }
  }

  useEffect(() => {
    setLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { uid, displayName: name, email, photoURL } = user;
        setUser({ uid, name, email, photoURL });
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, authenticate, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
