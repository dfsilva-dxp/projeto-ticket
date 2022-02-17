import { Route, Routes, Navigate } from "react-router-dom";

import { Home } from "pages/Home";
import { NotFound } from "pages/404";

import { SignInForm } from "components/Login/SignInForm";
import { SignUpForm } from "components/Login/SignUpForm";

import { Login } from "pages/Login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}>
        <Route index element={<SignInForm />} />
        <Route path="signup" element={<SignUpForm />} />
      </Route>
      <Route path="home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
