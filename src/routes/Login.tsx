import { Route, Switch, useRouteMatch } from "react-router-dom";

import { SignInForm } from "../components/Login/SignInForm";
import { SignUnForm } from "../components/Login/SignUnForm";

export const LoginRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`} component={SignInForm} />
      <Route exact path={`/signup`} component={SignUnForm} />
      <Route path="*" component={() => <h1>Not Found</h1>} />
    </Switch>
  );
};
