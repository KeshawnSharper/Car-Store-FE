import React, { Component } from "react";
import { Link } from "react-router-dom";
import Img from "../images/lambo.jpg";

import Image from "../../styled-components/Image";

// Banner image component
class Banner extends Component {
  render() {
    return (
      <Link to="/">
        <Image image={Img} height="280px" position="100% 10%" />
      </Link>
    );
  }
}

export default Banner;
