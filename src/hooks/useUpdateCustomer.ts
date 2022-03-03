import { useCallback } from "react";

import firebase from "services/firebase-connection";

import { DataUpdateCustomer } from "contexts/auth/types";

const useUpdateCustomer = () => {
  const updateDataCustomer = useCallback((data: DataUpdateCustomer) => {
    try {
      const response = firebase.auth().currentUser;
      if (response) {
        response.updateProfile(data);
      }
    } catch (err) {
      if (err instanceof Error) throw new Error(err.message);
    }
  }, []);

  return { updateDataCustomer };
};

export default useUpdateCustomer;
