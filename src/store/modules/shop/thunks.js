import { toast } from "react-toastify";
import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
  const cartList = JSON.parse(localStorage.getItem("cart")) || [];

  const flag = cartList.find((prd) => prd.id === product.id);

  if (flag === undefined) {
    const newCart = [...cartList, product];

    localStorage.setItem("cart", JSON.stringify(newCart));

    dispatch(addToCart(product));

    toast.success(`${product.name} foi adicionado ao carrinho!`);
  } else {
    toast.error(
      "Você não pode adicionar mais que 1 do mesmo pokémon ao carrinho."
    );
  }
};

export const removeFromCartThunk = (product) => (dispatch) => {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems = cartItems.filter((item) => item.id !== product.id);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  if (cartItems.length === 0) {
    localStorage.removeItem("cart");
  }

  dispatch(removeFromCart(product));
  toast.success(`${product.name} foi removido do carrinho!`);
};
