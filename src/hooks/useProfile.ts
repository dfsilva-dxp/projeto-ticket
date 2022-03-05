import { ChangeEvent, useCallback, useState } from "react";
import { toast } from "react-toastify";

import firebase from "services/firebase-connection";
import updateDataCustomer from "utils/updateCustomer";

const useProfile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  const changeFileAndUrl = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const photo = e.target.files![0];

    if (!!!photo) return;

    setUrl(URL.createObjectURL(photo));
    setFile(photo);
  }, []);

  const uploadFileStorage = useCallback(
    async (uid: string, file: File | null) => {
      if (!!file) {
        await firebase.storage().ref(`images/${uid}/${file?.name}`).put(file!);
      }
    },
    []
  );

  const getUrlFileStorage = useCallback(
    async (uid: string, file: File | null) => {
      if (!!file) {
        const url = await firebase
          .storage()
          .ref(`images/${uid}`)
          .child(file!.name)
          .getDownloadURL();

        return url;
      }
    },
    []
  );

  const save = useCallback(
    async (uid: string, newValue: string) => {
      try {
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
          }

          toast.success("Perfil atualizado");
        }
      } catch (err) {
        if (err instanceof Error) toast.error(err.message);
      }
    },
    [getUrlFileStorage, uploadFileStorage, file]
  );

  return { url, save, changeFileAndUrl };
};

export default useProfile;