import { Redirect, Route, RouteProps } from "react-router-dom";
import useCookies from "../hooks/useCookies";

export const PrivateRoute = ({ ...props }: RouteProps) => {
  const { cookies } = useCookies("ticke.refreshToken");
  const { "ticke.refreshToken": refreshToken } = cookies;

  return refreshToken ? <Route {...props} /> : <Redirect to="/" />;
};
