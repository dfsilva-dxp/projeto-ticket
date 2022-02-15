import { Redirect, Route, RouteProps } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const PrivateRoute = ({ ...props }: RouteProps) => {
  const { isSigned } = useAuth();

  return isSigned ? <Route {...props} /> : <Redirect to="/" />;
};
