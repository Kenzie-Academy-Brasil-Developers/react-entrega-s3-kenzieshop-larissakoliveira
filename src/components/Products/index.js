import { Button, Grid, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import ProductList from "../../ProductList";
import { addToCartThunk } from "../../store/modules/Cart/thunks";

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
    backgroundColor: ' #ff0052 ',
    borderRadius: '10px',
    padding: '10px',
    color: 'white',
    fontWeight: 'bold'
  },
});

const Products = () => {  

  const classes = useStyles();

  const dispatch = useDispatch();


  return (
    <Grid container spacing={4} >
      {ProductList.map((item) => {
        return (
          <Grid className={classes.root} item xs={2} md={4} key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h4>R$ {item.price.toFixed(2)}</h4>
            <img width="150px" height="200px" src={item.image} alt={item.title} />
            
            <Button className={classes.button} variant='outline'
                  onClick={() => dispatch(addToCartThunk(item))}
                >
                  Adicionar ao carrinho
                </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Products;
