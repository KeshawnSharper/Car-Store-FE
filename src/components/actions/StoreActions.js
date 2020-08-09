// Add selected item to cart

import axios from "axios";

// Provides selected item and quantity of item as parameters
export const addToCart = (item, quantity) => {
  return {
    type: "ADD_TO_CART",
    item,
    quantity
  };
};
export const login = (user) => {
  axios.post("https://storebe.herokuapp.com/login", user).then((res) => {
    localStorage.setItem("user_id", res.data.userid);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("firstname", res.data.first_name);
    localStorage.setItem("lastname", res.data.last_name);
    localStorage.setItem("email", res.data.email);
  });
  return {
    type: "LOGIN",
    payload: user
  };
};

export const register = (user) => {
  axios.post("https://storebe.herokuapp.com/register", user).then((res) => {
    console.log(res.data);
  });
  return {
    type: "REGISTER",
    payload: user
  };
};

export const purchase = (order) => {
  axios.post("https://storebe.herokuapp.com/orders", order).then((res) => {
    console.log(res.data);
  });
  return {
    type: "PURCHASE",
    payload: order
  };
};

// Remove selected item from cart
// Provides selected item as parameters
export const removeFromCart = (item) => {
  return {
    type: "REMOVE_FROM_CART",
    item
  };
};
