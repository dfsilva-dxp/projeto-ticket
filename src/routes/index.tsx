import { Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "contexts/auth";
import { route } from "constants/routes";

import { Home } from "pages/Home";
import { NotFound } from "pages/404";

import { SignInForm } from "components/Login/SignInForm";
import { SignUpForm } from "components/Login/SignUpForm";

import { Login } from "pages/Login";
import PrivateRoute from "./Private";

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
            <PrivateRoute redirectTo={route.LOGIN.SIGNIN}>
              <Home />
            </PrivateRoute>
          }
        />

        <Route path={route.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  );
};
