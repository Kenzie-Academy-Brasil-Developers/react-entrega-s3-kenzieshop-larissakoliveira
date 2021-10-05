import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { ShoppingCart } from "@material-ui/icons";

const Menu = () => {
  const history = useHistory();

  const cart = useSelector((store) => store.cart);

  const sendTo = (path) => {
    history.push(path);
  };

  const totalItemsCart = cart.length === 0 ? '' : cart.length

  return (
    
    <AppBar color='secondary' position="sticky">
      <Toolbar>
        <MenuItem onClick={() => sendTo("/")}>Todos produtos</MenuItem>
        <MenuItem onClick={() => sendTo("/cart")}>Carrinho<ShoppingCart
    fontSize="inherit"
    style={{ fontSize: "25px" }}
  />     {totalItemsCart}</MenuItem>
    
      </Toolbar>
      
    </AppBar>
  );
};

export default Menu;
