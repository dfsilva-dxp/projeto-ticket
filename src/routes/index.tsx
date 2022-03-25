import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { route } from "constants/routes";

import { LoginPage, ProfilePage } from "pages";
import Called from "pages/Called";
import Customers from "pages/Customers";
import NotFound from "pages/NotFound";

import { Layout, SignIn, SignUp } from "containers";

import RequiredAuth from "./RequiredAuth";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={route.LOGIN.SIGNIN} element={<LoginPage />}>
        <Route index element={<SignIn />} />
        <Route path={route.LOGIN.SIGNUP} element={<SignUp />} />
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

        <Route
          path={route.APP.PROFILE}
          element={
            <RequiredAuth redirectTo={route.LOGIN.SIGNIN}>
              <ProfilePage />
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
  );
};
