import React from "react";
import { Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "contexts/auth";
import { route } from "constants/routes";

import { Login } from "pages/Login";

import SignInForm from "components/Login/SignInForm";
import Layout from "components/Layout";

import PrivateRoute from "./Private";

const Home = React.lazy(() => import("pages/Home"));
const Customers = React.lazy(() => import("pages/Customers"));
const NotFound = React.lazy(() => import("pages/404"));

const SignUpForm = React.lazy(() => import("components/Login/SignUpForm"));

export const AppRoutes = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path={route.LOGIN.SIGNIN} element={<Login />}>
          <Route index element={<SignInForm />} />
          <Route path={route.LOGIN.SIGNUP} element={<SignUpForm />} />
        </Route>

        <Route
          path={route.HOME}
          element={
            <Layout>
              <PrivateRoute redirectTo={route.LOGIN.SIGNIN}>
                <Home />
              </PrivateRoute>
            </Layout>
          }
        />
        <Route
          path={route.CUSTOMERS}
          element={
            <Layout>
              <PrivateRoute redirectTo={route.LOGIN.SIGNIN}>
                <Customers />
              </PrivateRoute>
            </Layout>
          }
        />

        <Route path={route.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  );
};
