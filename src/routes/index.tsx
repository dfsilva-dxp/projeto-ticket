import { Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "contexts/auth";

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
        <Route path="/" element={<Login />}>
          <Route index element={<SignInForm />} />
          <Route path="signup" element={<SignUpForm />} />
        </Route>

        <Route
          path="home"
          element={
            <PrivateRoute redirectTo="/">
              <Home />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  );
};
