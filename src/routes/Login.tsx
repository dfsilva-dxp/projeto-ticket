import { Route, Switch, useRouteMatch } from "react-router-dom";

import { routes } from "../constants/routes";

import { SignInForm } from "../components/Login/SignInForm";
import { SignUpForm } from "../components/Login/SignUpForm";

export const LoginRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`} component={SignInForm} />
      <Route path={`${path}${routes.SIGN_UP}`} component={SignUpForm} />
      <Route
        path={`${path}${routes.FORGOT}`}
        component={() => <h1>FORGOT</h1>}
      />
      <Route path="*" component={() => <h1>Not Found</h1>} />
    </Switch>
  );
};
