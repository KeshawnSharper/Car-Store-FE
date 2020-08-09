import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { connect } from "react-redux";
import { purchase } from "../actions/StoreActions";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
toast.configure;
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    total: state.total
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    purchase: (item) => {
      dispatch(purchase(item));
    }
  };
};
function Stripe(props) {
  const [product] = React.useState({
    name: "tesla Roadster",
    price: 3000.67
  });
  async function handleToken(token, address) {
    const response = await axios.post(
      "https://1k833.sse.codesandbox.io/checkout",
      {
        token,
        product
      }
    );
    const { status } = response.data;
    if (status === "success") {
      console.log(address);
      purchaseCartItems(address);
    } else {
      toast("Failed, please try again", { type: "error" });
    }
    console.log(response.data);
  }
  const purchaseCartItems = (info) => {
    props.cart.forEach((item) => {
      item.user_id = localStorage.getItem("user_id");
      item.product_id = item.id;
      item.email = localStorage.getItem("email");
      item.street =
        info.billing_address_line1 +
        info.billing_address_state +
        info.billing_address_zip;
      item.city = info.shipping_address_city;
      item.country = info.shipping_address_country;
      item.delivered = false;
      item.date_ordered = new Date();
      props.purchase(item);
    });
  };
  return (
    <div className="container">
      <StripeCheckout
        stripeKey="pk_test_hTW9JfInfoPOjd6gAD6oVyH500dM7jOeZX"
        token={handleToken}
        amount={props.total * 100}
        billingAddress
        shippingAddress
        name={product.name}
      />
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Stripe);
