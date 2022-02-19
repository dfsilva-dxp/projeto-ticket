import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "contexts/auth";
import { route } from "constants/routes";

import { Login } from "pages/Login";

import SignInForm from "components/Login/SignInForm";

import RequiredAuth from "./RequiredAuth";

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
          <Route
            path={route.LOGIN.SIGNUP}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SignUpForm />
              </Suspense>
            }
          />
        </Route>

        <Route
          path={route.HOME}
          element={
            <RequiredAuth redirectTo={route.LOGIN.SIGNIN}>
              <Home />
            </RequiredAuth>
          }
        />
        <Route
          path={route.CUSTOMERS}
          element={
            <RequiredAuth redirectTo={route.LOGIN.SIGNIN}>
              <Customers />
            </RequiredAuth>
          }
        />

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
