import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav } from "shards-react";
import { NavLink } from "shards-react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);

export default class NavExample extends React.Component {
  render() {
    return (
      <Navbar type="dark" theme="dark" expand="md">
        <NavbarBrand tag={Link} to="/">
          Lavish Cars
        </NavbarBrand>

        {/* Link to shopping cart */}
        {/* Aligned to right */}
        <Nav navbar className="ml-auto">
          <NavLink active tag={Link} to="/cart">
            <FontAwesomeIcon icon="shopping-cart" />
          </NavLink>
        </Nav>
      </Navbar>
    );
  }
}
