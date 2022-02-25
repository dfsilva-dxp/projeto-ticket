import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "contexts/auth";
import { route } from "constants/routes";

import Login from "pages/Login";
import NotFound from "pages/NotFound";

import SignInForm from "components/Login/SignInForm";
import SignUpForm from "components/Login/SignUpForm";

import RequiredAuth from "./RequiredAuth";
import Layout from "components/Layout";
import Called from "pages/Called";
import Customers from "pages/Customers";

export const AppRoutes = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path={route.LOGIN.SIGNIN} element={<Login />}>
          <Route index element={<SignInForm />} />
          <Route path={route.LOGIN.SIGNUP} element={<SignUpForm />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route
            path={route.APP.CALLEDS.ALL}
            element={
              <RequiredAuth redirectTo={route.LOGIN.SIGNIN}>
                <Called />
              </RequiredAuth>
            }
          />
          <Route
            path={route.APP.CUSTOMERS.ALL}
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
