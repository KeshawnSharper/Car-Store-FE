import React from "react";
// import "../styles/style-product.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: this.props.data
    };
  }
  render() {
    return (
      <div className=" col-10 mx-auto col-sm-6 col-md-3 product-item">
        <Link
          to={`/car/detail/${this.state.car.id}`}
          onClick={() => this.props.getDetail(this.state.car.id)}
        >
          <img className="card-img" src={this.state.car.img} alt="phoneImage" />
          <div className="card-body">
            <h5 className="card-title">{this.state.car.title}</h5>
            <p className="price">{this.state.car.price + "$"}</p>
          </div>
        </Link>

        <div className="btn-in-picture">
          <button onClick={() => this.props.addCart(this.state.car.id)}>
            <i className="fas fa-cart-plus" />
          </button>
        </div>
      </div>
    );
  }
}
