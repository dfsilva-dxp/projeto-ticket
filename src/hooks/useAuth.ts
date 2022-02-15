import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

const useAuth = () => useContext(AuthContext);

export default useAuth;
