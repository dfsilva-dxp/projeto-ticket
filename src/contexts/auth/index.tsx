import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import firebase from "services/firebase-connection";
import { route } from "constants/routes";
import updateDataCustomer from "utils/updateCustomer";

import useSession from "hooks/useSession";

import {
  AuthContextData,
  AuthProviderProps,
  Credentials,
  Customer,
} from "./types";

const AuthContext = createContext({} as AuthContextData);

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { setSesstion, removeSession } = useSession();

  const signIn = useCallback(
    async ({ email, password }: Credentials) => {
      try {
        setLoading(true);
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(({ user }) => user);

        if (response) {
          const { refreshToken } = response;

          setSesstion(refreshToken);
        }

        navigate(`/${route.APP.CALLEDS.ALL}`);
      } catch (err) {
        if (err instanceof Error) {
          toast.error(err.message);
        }

        removeSession();
      } finally {
        setLoading(false);
      }
    },
    [setSesstion, removeSession, navigate]
  );

  const signUp = useCallback(
    async ({ name = "", email, password }: Credentials) => {
      try {
        setLoading(true);

        const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);

        if (response.user) {
          const { uid, displayName, email, photoURL } = response.user;
          firebase
            .firestore()
            .collection("customers")
            .doc(uid)
            .set({ uid, displayName, email, photoURL });
        }

        updateDataCustomer({
          displayName: name,
        });

        toast.success("User cadastrado com sucesso!");

        navigate(route.LOGIN.SIGNIN);
      } catch (err) {
        if (err instanceof Error) {
          toast.error(err.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  const signOut = useCallback(async () => {
    await firebase.auth().signOut();

    setUser(null);
    removeSession();
    navigate(route.LOGIN.SIGNIN);
  }, [removeSession, navigate]);

  useEffect(() => {
    (() => {
      setLoading(true);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const { uid } = user;
          firebase
            .firestore()
            .collection("customers")
            .doc(uid)
            .onSnapshot((doc) =>
              setUser({
                displayName: doc.data()!.displayName,
                email: doc.data()!.email,
                photoURL: doc.data()!.photoURL,
                uid,
              })
            );
        } else {
          setUser(null);
          setLoading(false);
        }
      });
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signOut,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
