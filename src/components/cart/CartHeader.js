import React, { Component } from 'react';
import { Row, Col } from 'shards-react';
import { connect } from 'react-redux';
import Styled from '../../styled-components/Styled';

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

// Style declaration
// Text aligns right
const right = {
    textAlign: "right"
}

class CartHeader extends Component {
    render() { 
        return (
            <Styled.Text><Row>

                    {/* Displays number of items in cart */}
                    {/* Occupies three columns of space */}
                    <Col xs={6}>My Cart ( {this.props.cart.length} )</Col>

                    {/* Text aligned right */}
                    <Col xs={2} style={right}>Price</Col>
                    <Col xs={2} style={right}>Qty</Col>
                    <Col xs={2} style={right}>Total</Col>
                    
            </Row></Styled.Text>
        );
    }
}
 
export default connect (mapStateToProps) (CartHeader);