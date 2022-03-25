import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import firebase from "services/firebase-connection";

import { route } from "constants/routes";

import useSession from "hooks/useSession";

import {
  Credentials,
  Customer,
  FirebaseContextData,
  FirebaseContextProps,
  FirebaseUpdateData,
  RegistrationData,
} from "./types";

const FirebaseContext = createContext({} as FirebaseContextData);

const FirebaseContextProvider = ({ children }: FirebaseContextProps) => {
  const [user, setUser] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setSesstion, removeSession } = useSession();

  const updateDataCustomer = useCallback((data: FirebaseUpdateData) => {
    try {
      const response = firebase.auth().currentUser;
      if (response) {
        response.updateProfile(data);
      }
    } catch (err) {
      if (err instanceof Error) throw new Error(err.message);
    }
  }, []);

  const signIn = useCallback(
    async ({ email, password }: Credentials) => {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(({ user }) => user);

        if (response) {
          const { refreshToken, uid, displayName, email, photoURL } = response;

          setSesstion(refreshToken);
          setUser({ uid, displayName, email, photoURL });
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
    async ({ name, email, password }: RegistrationData) => {
      try {
        const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);

        if (response.user) {
          const { uid, photoURL } = response.user;
          firebase
            .firestore()
            .collection("customers")
            .doc(uid)
            .set({ uid, displayName: name, email, photoURL });
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
    [navigate, updateDataCustomer]
  );

  const signOut = useCallback(async () => {
    await firebase.auth().signOut();

    setUser(null);
    removeSession();
  }, [removeSession]);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
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
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signOut,
        updateDataCustomer,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseContextProvider };
