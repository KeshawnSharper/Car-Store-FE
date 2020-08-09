import React, { Component } from "react";
import { connect } from "react-redux";
import Styled from "../../styled-components/Styled";
import { Link } from "react-router-dom";
const mapStateToProps = (state) => {
  return {
    brands: state.brands
  };
};

// Component that displays all cake items in the store
// Loops through all cakes and displays two columns per row
class Brands extends Component {
  render() {
    return (
      <Styled.Section top="20px" bottom="20px">
        {/* Section with a top and bottom padding of 20px each */}

        <Styled.Wrapper width="95%">
          <Styled.Grid>
            {/* Loops through state for every cake item */}
            {/* Displays every item in a two column layout */}

            {this.props.brands.map((brand, i) => (
              <Link to={`/brands/${brand.title}`}>
                <Styled.Div
                  key={brand.id}
                  display="flex"
                  col={i % 2 === 0 ? 1 : 2}
                  style={{ cursor: "pointer" }}
                  // onClick={() => this.props.toggle(brand)}
                >
                  {/* onClick={() => this.props.toggle(brand)}
              > */}
                  {/* For each item, display two columns */}
                  {/* Mouse becomes pointer on hover */}
                  {/* On click calls main page to open dialog */}

                  {/* Left column, display cake image */}
                  <Styled.Image image={brand.img} height="32vh" width="45%" />

                  {/* Right column, title and description */}
                  <Styled.Div
                    width="55%"
                    display="flex"
                    direction="column"
                    align="center"
                    justify="center"
                  >
                    <Styled.Text size="2.4rem">{brand.title}</Styled.Text>
                    <Styled.Text>{brand.desc}</Styled.Text>
                  </Styled.Div>
                </Styled.Div>
              </Link>
            ))}
          </Styled.Grid>
        </Styled.Wrapper>
      </Styled.Section>
    );
  }
}

export default connect(mapStateToProps)(Brands);
