import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/StoreActions";
const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (props) => {
      dispatch(login(props));
    }
  };
};
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    this.props.history.push("/home");
    this.props.login(this.state);
    this.setState({
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.displayLogin}>
          <h2>Login</h2>
          <div className="username">
            <input
              type="text"
              placeholder="Username..."
              value={this.state.email}
              onChange={this.update}
              name="email"
            />
          </div>

          <div className="password">
            <input
              type="password"
              placeholder="Password..."
              value={this.state.password}
              onChange={this.update}
              name="password"
            />
          </div>

          <button type="submit" value="Login">
            {" "}
            Submit{" "}
          </button>
        </form>

        <Link to="/register">Create an account</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
