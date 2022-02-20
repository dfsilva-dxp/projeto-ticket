import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "contexts/auth";
import { route } from "constants/routes";

import Login from "pages/Login";
import Home from "pages/Home";
import Customers from "pages/Customers";
import NotFound from "pages/404";

import SignInForm from "components/Login/SignInForm";

import RequiredAuth from "./RequiredAuth";
import Layout from "components/Layout";

const SignUpForm = React.lazy(() => import("components/Login/SignUpForm"));

export const AppRoutes = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path={route.LOGIN.SIGNIN} element={<Login />}>
          <Route index element={<SignInForm />} />
          <Route
            path={route.LOGIN.SIGNUP}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SignUpForm />
              </Suspense>
            }
          />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route
            path={route.APP.HOME}
            element={
              <RequiredAuth redirectTo={route.LOGIN.SIGNIN}>
                <Home />
              </RequiredAuth>
            }
          />
          <Route
            path={route.APP.CUSTOMERS}
            element={
              <RequiredAuth redirectTo={route.LOGIN.SIGNIN}>
                <Customers />
              </RequiredAuth>
            }
          />
        </Route>

        <Route
          path={route.NOT_FOUND}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
};
