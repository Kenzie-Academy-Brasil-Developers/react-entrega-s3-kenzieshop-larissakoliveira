import { removeFromCartThunk } from "../../store/modules/Cart/thunks";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";


const useStyles = makeStyles({
  root: {
    marginTop: "10px",
    backgroundColor: ' #ffdcde ',
    border: 'black solid 3px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginTop: "10px",
    backgroundColor: 'red',
    borderRadius: '10px',
    padding: '10px',
    color: 'white',
    fontWeight: 'bold'
  },
});

const AddToCart = () => {

  const classes = useStyles();

  const dispatch = useDispatch();

  const cart = useSelector((store) => store.cart);

  const totalToPay = cart.reduce((anterior, atual)=>anterior + Number(atual.price),0).toFixed(2)

  return (
    <>
    <h2 style={{border: "5px solid black"}}>Valor total da compra: R$ {totalToPay}</h2>
    <Grid container spacing={4}>
      {cart.map((item) => {
        return (
          <Grid  className={classes.root} item xs={2} md={4} key={item.id} style={{margin: "10px"}}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h4>R$ {item.price.toFixed(2)}</h4>
            <img widht="150px" height='180px' src={item.image} alt={item.title} />
            <Button className={classes.button} onClick={() => dispatch(removeFromCartThunk(item))} >Remover do Carrinho</Button>
          </Grid>
        );
      })}
    </Grid>
    </>
  );
};

export default AddToCart;
