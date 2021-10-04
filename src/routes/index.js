import { Route, Switch } from "react-router-dom";
import Cart from "../components/Cart";
import Products from "../components/Products";

const Routes = () => {
  return (
    <Switch>
      <Route>
        <Products exact path="/" />
      </Route>
      <Route>
        <Cart path="/cart" />
      </Route>
    </Switch>
  );
};

export default Routes;
