import { FirebaseContext } from "contexts/firebase";
import { useContext } from "react";

const useFirebase = () => useContext(FirebaseContext);

export default useFirebase;
