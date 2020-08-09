import initState from "./components/reducers/initState";

export const loadState = () => {
  try {
    const cart = localStorage.getItem("cart");
    if (cart === null) {
      return undefined;
    }

    const parsedCart = JSON.parse(cart);

    return {
      user: initState.user,
      brands: initState.brands,
      cupcake: initState.cupcake,
      orders: initState.orders,
      cart: parsedCart.cart,
      total: parsedCart.total
    };
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const saveState = (cart) => {
  try {
    const state = JSON.stringify(cart);
    localStorage.setItem("cart", state);
  } catch (err) {
    console.log(err);
  }
};
