import { Navigate } from "react-router-dom";
import useCookies from "../hooks/useCookies";

import { PrivateRouteProps } from "./types";

const PrivateRoute = ({ redirectTo, children }: PrivateRouteProps) => {
  const { cookies: refreshToken } = useCookies("ticke.refreshToken");

  return refreshToken ? children : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
