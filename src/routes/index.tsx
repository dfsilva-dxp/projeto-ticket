import { Route, Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { PrivateRoute } from "./Private";

import { routes } from "../constants/routes";

export const Routes = () => {
  return (
    <Switch>
      <PrivateRoute
        path={routes.DASHBOARD}
        component={() => <h1>Dashboard</h1>}
      />
      <Route path={routes.LOGIN} component={Login} />

      <Route path="*" component={() => <h1>Not Found</h1>} />
    </Switch>
  );
};
