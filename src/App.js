import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Cart from "./components/cart/Cart";
import Cars from "./components/cars/CarsList";
import CarDetail from "./components/cars/CarDetail";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Banner />
        <Navbar />
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Main} />
        <Route exact path="/brands/:brand" component={Cars} />
        <Route path="/cart" component={Cart} />
        <Route path="/car/detail/:id" component={CarDetail} />
        <Footer />
      </Router>
    );
  }
}

export default App;
