import React, { Component, Fragment } from "react";
import { addToCart } from "../actions/StoreActions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "shards-react";
import Dialog from "@material-ui/core/Dialog";

import Description from "./Description";
import Brands from "./Brands";
import CupCakes from "./CupCakes";
import Styled from "../../styled-components/Styled";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    brands: state.brands,
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, quantity) => {
      dispatch(addToCart(item, quantity));
    }
  };
};

// Main application page
class Main extends Component {
  state = {
    item: this.props.brands[0],
    quantity: 1,
    open: false
  };

  // Opens items dialog
  openDialog = (item) => {
    this.setState({
      item: item,
      open: true
    });
  };

  // Close item dialog
  // Sets item quantity to 1
  closeDialog = () => {
    this.setState({
      open: false,
      quantity: 1
    });
  };

  // Update quantity of selected item
  // Quantity limited to between 0 and 50
  updateQty = (e) => {
    if (e.target.validity.valid && e.target.value > 0 && e.target.value <= 50) {
      this.setState({ quantity: e.target.value });
    }
  };

  render() {
    console.log(this.props.brands);
    return (
      <Fragment>
        {/* Page component */}
        <Brands toggle={this.openDialog} />
        <Description />
        {/* <CupCakes toggle={this.openDialog} /> */}

        {/* Popup item dialog */}
        {/* Displays two columns with pink background */}
        <Dialog
          open={this.state.open}
          onClose={this.closeDialog}
          fullWidth={true}
          maxWidth="md"
        >
          <Styled.Div display="flex" color="rgb(255, 224, 248)">
            {/* Left column, item image */}
            <Styled.Image
              image={this.state.item.img}
              height="60vh"
              width="60%"
            />

            {/* Right column */}
            <Styled.Div
              width="40%"
              margin="10px"
              display="flex"
              direction="column"
              align="center"
              justify="center"
            >
              {/* Item title, description and price */}
              <Styled.Text size="2.1rem">{this.state.item.title}</Styled.Text>
              <Styled.Text margin="0 0 5px 0">
                {this.state.item.desc}
              </Styled.Text>
              <Styled.Text margin="0 5px 50px 0">
                ${this.state.item.price.toFixed(2)}
              </Styled.Text>

              {/* Item quantity, calls updateQTY on change */}
              <Styled.Div display="flex" margin="0 0 10px 0">
                <Styled.Text size="1.2rem" margin="0 5px 0 0">
                  Quantity:
                </Styled.Text>
                <input
                  type="number"
                  value={this.state.quantity}
                  onChange={this.updateQty}
                  style={{ width: "80px" }}
                />
              </Styled.Div>

              {/* Add to cart button */}
              {/* Adds selected item to cart */}
              {/* Navigates to shopping cart page */}
              <Link to="/cart">
                <Button
                  squared
                  theme="dark"
                  onClick={() =>
                    this.props.addToCart(this.state.item, this.state.quantity)
                  }
                >
                  Add to Cart
                </Button>
              </Link>
            </Styled.Div>
          </Styled.Div>
        </Dialog>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
