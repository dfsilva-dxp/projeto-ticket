import { ChangeEvent, useCallback, useState } from "react";
import { toast } from "react-toastify";

import firebase from "services/firebase-connection";

import useFirebase from "./useFirebase";

const useProfile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { updateDataCustomer } = useFirebase();

  const changeFileAndUrl = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true);
      const photo = e.target.files![0];

      if (!!!photo) return;

      setUrl(URL.createObjectURL(photo));
      setFile(photo);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const uploadFileStorage = useCallback(
    async (uid: string, file: File | null) => {
      try {
        setLoading(true);
        if (!!file) {
          await firebase
            .storage()
            .ref(`images/${uid}/${file?.name}`)
            .put(file!);
        }
      } catch (err) {
        if (err instanceof Error) {
          toast.error(err.message);
        }
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const getUrlFileStorage = useCallback(
    async (uid: string, file: File | null) => {
      try {
        setLoading(true);
        if (!!file) {
          const url = await firebase
            .storage()
            .ref(`images/${uid}`)
            .child(file!.name)
            .getDownloadURL();

          return url;
        }
      } catch (err) {
        if (err instanceof Error) {
          toast.error(err.message);
        }
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const save = useCallback(
    async (uid: string, newValue: string) => {
      try {
        setLoading(true);
        if (uid && newValue) {
          updateDataCustomer({
            displayName: newValue,
          });

          firebase.firestore().collection("customers").doc(uid).update({
            displayName: newValue,
          });

          if (file) {
            await uploadFileStorage(uid, file);
            const urlFileStorage = await getUrlFileStorage(uid, file);

            firebase
              .firestore()
              .collection("customers")
              .doc(uid)
              .update({
                photoURL: `${urlFileStorage}`,
              });

            updateDataCustomer({
              photoURL: `${urlFileStorage}`,
            });
          }

          toast.success("Perfil atualizado");
        }
      } catch (err) {
        if (err instanceof Error) toast.error(err.message);
      } finally {
        setLoading(false);
      }
    },
    [getUrlFileStorage, uploadFileStorage, updateDataCustomer, file]
  );

  return { url, save, changeFileAndUrl, loading };
};

export default useProfile;
