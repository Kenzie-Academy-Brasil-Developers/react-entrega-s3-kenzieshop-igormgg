import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { removeFromCartThunk } from "../../store/modules/shop/thunks";
import "./styles.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const history = useHistory();

  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, item) => {
    let output = acc + Number(item.price);
    return Math.round(output * 100) / 100;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="emptyCartContainer">
        <Button onClick={() => history.push("/")} variant="contained">
          Comprar um pokémon!
        </Button>
        <div>
          <h2>Sem pokémons no carrinho =(</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="cartContainer">
      <Button onClick={() => history.push("/")} variant="contained">
        Voltar ao PokéMart!
      </Button>
      <div className="cartSummary">
        <h5>Atualmente você tem {cart.length} pokémons no carrinho. </h5>
        <h4>Seus pokémons custam:</h4>
        <h3>R${totalPrice}</h3>
      </div>
      <div className="cartBox">
        <h1>PokéCart!</h1>
        <ul className="cartBox__pokemons">
          {cart.map((prd, index) => {
            return (
              <li key={index}>
                <img alt={prd.name} src={prd.img} />
                <h3>{prd.name} </h3>
                <h2>R${prd.price} </h2>
                <Button
                  onClick={() => dispatch(removeFromCartThunk(prd))}
                  variant="outlined"
                >
                  Remover do carrinho
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
