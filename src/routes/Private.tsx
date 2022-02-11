import { Redirect, Route, RouteProps } from "react-router-dom";

export const PrivateRoute = ({ ...props }: RouteProps) => {
  const signed = false;

  return signed ? <Route {...props} /> : <Redirect to="/" />;
};
