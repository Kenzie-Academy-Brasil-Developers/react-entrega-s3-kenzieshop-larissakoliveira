import { Route, Switch } from "react-router-dom";
import AddToCart from "../components/AddToCart";
import Products from "../components/Products";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Products/>
      </Route>
      <Route path="/cart" >
        <AddToCart/>
      </Route>
    </Switch>
  );
};

export default Routes;
  