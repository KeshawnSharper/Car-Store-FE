import lambo from "../images/lambo.jpg";
import ferrari from "../images/ferrari.jpg";
import mcclaren from "../images/mcclaren.jpg";
import rollsRoyce from "../images/rollsroyce.jpg";
import BMW from "../images/bmw.jpg";
import porshe from "../images/porshe.jpg";
import tesla from "../images/tesla.jpg";
import corvette from "../images/corvette.jpg";

import cupcake1 from "../images/strawberry-tart.jpg";
import cupcake2 from "../images/sweet-chocolate.jpg";
import cupcake3 from "../images/sweet-frosting.jpg";
import cupcake4 from "../images/royal-red.jpg";
import cupcake5 from "../images/floral-pastel.jpg";
import cupcake6 from "../images/party-muffin.jpg";

// Exports the initial state
const initState = {
  user: {
    username: null,
    id: null
  },
  orders: [],
  // Cake items in the store
  brands: [
    {
      id: 1,
      title: "Lamborghini",
      desc: "Create anything you desire.",
      img: lambo,
      price: 470000
    },
    {
      id: 2,
      title: "Ferrari",
      desc: "We don't have to be concerned.",
      img: ferrari,
      price: 200000
    },
    {
      id: 3,
      title: "Mclaren",
      desc: "Let it fall where it will.",
      img: mcclaren,
      price: 150000
    },
    {
      id: 4,
      title: "Rolls Royce",
      desc: "See it finished in your mind.",
      img: rollsRoyce,
      price: 570000
    },
    {
      id: 5,
      title: "BMW",
      desc: "Decide where your cloud lives.",
      img: BMW,
      price: 140000
    },
    {
      id: 6,
      title: "Porshe",
      desc: "Take a step back and look.",
      img: porshe,
      price: 160000
    },
    {
      id: 7,
      title: "Tesla",
      desc: "It's all a game of angles.",
      img: tesla,
      price: 80000
    },
    {
      id: 8,
      title: "Corvette",
      desc: "Put your feelings into it.",
      img: corvette,
      price: 75000
    }
  ],

  // Cupcake items
  cupcake: [
    {
      id: 9,
      title: "Strawberry Tart",
      desc: "Always one step further.",
      img: cupcake1,
      price: 1.5
    },
    {
      id: 10,
      title: "Sweet Chocolate",
      desc: "There's really no end to this.",
      img: cupcake2,
      price: 1.65
    },
    {
      id: 11,
      title: "Sweet Frosting",
      desc: "Something you can't fail at.",
      img: cupcake3,
      price: 1.4
    },
    {
      id: 12,
      title: "Royal Red",
      desc: "Wherever you want to be.",
      img: cupcake4,
      price: 1.5
    },
    {
      id: 13,
      title: "Floral Pastel",
      desc: "We have plenty of time.",
      img: cupcake5,
      price: 2.1
    },
    {
      id: 14,
      title: "Party Muffin",
      desc: "Bring them into your world.",
      img: cupcake6,
      price: 1.4
    }
  ],

  // Shopping cart
  cart: [],

  // Total price of items in cart
  total: 0
};

export default initState;
