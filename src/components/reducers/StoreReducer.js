import initState from "./initState";

const StoreReducer = (state = initState, action) => {
  switch (action.type) {
    // Add items to cart
    case "ADD_TO_CART":
      // Update total price of cart items
      // Item base price + item quantity
      state.total += parseInt(action.item.price) * parseInt(action.quantity);

      // Check if selected item already exists in cart
      let item = state.cart.find((item) => action.item.id === item.id);

      // If item does not exist in cart, add new item to cart
      if (!item) {
        action.item.quantity = parseInt(action.quantity);

        return {
          ...state,
          cart: [...state.cart, action.item]
        };
      }

      // If item exists in cart, update quantity of existing item
      item.quantity = parseInt(item.quantity) + parseInt(action.quantity);

      return state;

    // Remove item from cart
    case "REMOVE_FROM_CART":
      // Update total price of cart items
      // Subtract item base price + item quantity
      state.total -=
        parseInt(action.item.price) * parseInt(action.item.quantity);

      // Remove item from cart
      item = state.cart.filter((item) => action.item.id !== item.id);

      return {
        ...state,
        cart: item
      };
    case "LOGIN":
      // Update total price of cart items
      // Subtract item base price + item quantity
      return {
        ...state,
        user: action.payload
      };
    case "REGISTER":
      // Update total price of cart items
      // Subtract item base price + item quantity
      return {
        ...state,
        user: action.payload
      };
    case "PURCHASE":
      // Update total price of cart items
      // Subtract item base price + item quantity
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default StoreReducer;
