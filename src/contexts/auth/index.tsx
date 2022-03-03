import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import firebase from "services/firebase-connection";

import useSession from "hooks/useSession";
import useUpdateCustomer from "hooks/useUpdateCustomer";

import { route } from "constants/routes";

import { AuthContextData, AuthProviderProps, Credentials } from "./types";

const AuthContext = createContext({} as AuthContextData);

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { setSesstion, removeSession } = useSession();
  const { updateDataCustomer } = useUpdateCustomer();

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

        await firebase.auth().createUserWithEmailAndPassword(email, password);

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
    navigate(route.LOGIN.SIGNIN);
  }, [removeSession, navigate]);

  useEffect(() => {
    (() => {
      setLoading(true);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
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
