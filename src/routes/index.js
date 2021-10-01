import { Route, Switch } from "react-router";
import Cart from "../Components/Cart";
import Dashboard from "../Components/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
