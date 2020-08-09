import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../actions/StoreActions";
const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    register: (props) => {
      dispatch(register(props));
    }
  };
};
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };

    this.update = this.update.bind(this);

    this.displayLogin = this.displayLogin.bind(this);
  }

  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  displayLogin(e) {
    e.preventDefault();
    console.log("You have successfully registered");
    this.props.register(this.state);
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <div className="register">
        <form onSubmit={this.displayLogin}>
          <h2>Register</h2>

          <div className="name">
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              value={this.state.first_name}
              onChange={this.update}
            />
          </div>
          <div className="name">
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={this.state.last_name}
              onChange={this.update}
            />
          </div>

          <div className="email">
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.update}
            />
          </div>

          <div className="pasword">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.update}
            />
          </div>

          <div className="password">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password1"
            />
          </div>

          <button type="submit" value="Login">
            Register{" "}
          </button>
        </form>

        <Link to="/">Login Here</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
