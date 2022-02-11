import { Route, Switch } from "react-router-dom";
import { Login } from "../pages/Login";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Login} />
      <Route path="*" component={() => <h1>Not Found</h1>} />
    </Switch>
  );
};
