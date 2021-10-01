import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addToCartThunk } from "../../store/modules/shop/thunks";
import "../../pokeProducts.js";
import products from "../../pokeProducts.js";
import "./styles.css";

const Dashboard = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  return (
    <div className="productsContainer">
      <Button onClick={() => history.push("/cart")} variant="contained">
        Ir para o PokéCart!
      </Button>
      <div className="productsBox">
        <h1>PokéMart!</h1>
        <ul className="productsBox__pokemons">
          {products.map((prd, index) => {
            return (
              <li key={index}>
                <img alt={prd.name} src={prd.img} />
                <h3>{prd.name} </h3>
                <h2>R${prd.price} </h2>
                <Button
                  onClick={() => dispatch(addToCartThunk(prd))}
                  variant="outlined"
                >
                  Adicionar ao carrinho
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
