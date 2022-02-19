import Layout from "components/Layout";
import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import useCookies from "../hooks/useCookies";

import { RequiredAuthProps } from "./types";

const RequiredAuth = ({ redirectTo, children }: RequiredAuthProps) => {
  const { cookies: refreshToken } = useCookies("ticke.refreshToken");

  return refreshToken ? (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>{children}</Layout>
    </Suspense>
  ) : (
    <Navigate to={redirectTo} />
  );
};
export default RequiredAuth;
