import React from "react";
import { connect } from "react-redux";
import "../../styles/style-detail.css";
import { addToCart } from "../actions/StoreActions";
const mapStateToProps = (state) => {
  return {
    cars: state.brands
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, quantity) => {
      dispatch(addToCart(item, quantity));
    }
  };
};
class CarDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: this.props.cars.filter(
        (car) => Number(car.id) === Number(this.props.match.params.id)
      )[0]
    };
  }
  render() {
    console.log(this.state.detail);
    return (
      <div>
        <h1 className="detail-title mb-4">{this.state.detail.title}</h1>
        <div className="row">
          <div className="detail-img col-md-5 mb-3">
            <img src={this.state.detail.img} alt="imageProduct" />
          </div>
          <div className="detail-img col-md-7">
            <div className="detail-info">
              <p>{this.state.detail.info}</p>
            </div>
            <div className="detail-company">
              <span className="font-weight-bold">Company product: </span>
              <span>{this.state.detail.company}</span>
            </div>
            <div className="detail-price">
              <span className="font-weight-bold">Price: </span>
              <span>{this.state.detail.price + "$"}</span>
            </div>
            <div className="addCart">
              <button
                className="mt-3 p-2 mb-3"
                onClick={() => this.props.addToCart(this.state.detail, 1)}
              >
                <i className="fas fa-cart-plus mr-2" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CarDetail);
