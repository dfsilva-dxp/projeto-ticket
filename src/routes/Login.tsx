import { Route, Switch, useRouteMatch } from "react-router-dom";

import { SignInForm } from "../components/Login/SignInForm";
import { SignUpForm } from "../components/Login/SignUpForm";

export const LoginRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`} component={SignInForm} />
      <Route exact path={`/signup`} component={SignUpForm} />
      <Route path="*" component={() => <h1>Not Found</h1>} />
    </Switch>
  );
};
