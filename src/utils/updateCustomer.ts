import firebase from "services/firebase-connection";

import { DataUpdateCustomer } from "contexts/auth/types";

const updateDataCustomer = (data: DataUpdateCustomer) => {
  try {
    const response = firebase.auth().currentUser;
    if (response) {
      response.updateProfile(data);
    }
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
  }
};

export default updateDataCustomer;
