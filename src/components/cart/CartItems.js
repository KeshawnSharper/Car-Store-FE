import React, { Component, Fragment } from 'react';
import { removeFromCart } from '../actions/StoreActions';
import { connect } from 'react-redux';
import { Row, Col } from 'shards-react';
import Styled from '../../styled-components/Styled';

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        total: state.total,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeFromCart: (item) => {dispatch(removeFromCart(item))}
    }
}

// Style declaration
// Text aligns right
// Font size of 1.25rem
const right = {
    fontSize: "1.25rem",
    textAlign: "right",
};

class CartItems extends Component {

    // Removes selected item from cart
    // Provides selected item as parameter
    removeFromCart = (item) => {
        this.props.removeFromCart(item);
    }

    render() { 
        return (
            <Fragment>
                <Styled.HR/>

                {/* Loop through each item in shopping cart */}
                {/* Each row seperated by 8px margin */}
                {this.props.cart.map((cart, i) => (
                    <Row key={cart.id} style={{marginTop: "8px"}}>

                        {/* Item image occupies one column of space */}
                        {/* Size adjusts for smaller displays */}
                        <Col xs={3} xl={2}><Styled.Image image={cart.img} width="150px" height="130px" /></Col>

                        {/* Item title and remove from cart button */}
                        {/* Occupies two columns of space */}
                        {/* Size adjusts for smaller displays */}
                        <Col xs={3} xl={4}>
                            <Styled.Div display="flex" direction="column">
                                <Styled.Text>{cart.title}</Styled.Text>

                                {/* Remove from cart button */}
                                {/* On click calls remove from cart action */}
                                {/* Provides current item as paramters */}
                                <Styled.Text size="1rem" onClick={() => this.removeFromCart(cart)} 
                                    style={{cursor: "pointer", width: "1px"}}>Remove</Styled.Text>

                            </Styled.Div>
                        </Col>

                        {/* Item price, quantity, and total price */}
                        <Col xs={2}><Styled.Text style={right}>${cart.price.toFixed(2)}</Styled.Text></Col>
                        <Col xs={2}><Styled.Text style={right}>{cart.quantity}</Styled.Text></Col>

                        {/* Total price = base price * quantity */}
                        <Col xs={2}><Styled.Text style={right}>${(cart.price*cart.quantity).toFixed(2)}</Styled.Text></Col>
                    </Row>
                ))}

                {/* Displays only if shopping cart is empty */}
                {this.props.cart.length === 0 ? (
                    <Styled.Div width="100%" height="200px" display="flex" align="center" justify="center">
                        <Styled.Text>Cart is empty</Styled.Text>
                    </Styled.Div>
                ): null}

                <Styled.HR width="100%"/>
            </Fragment>
        );
    }
}
 
export default connect (mapStateToProps, mapDispatchToProps) (CartItems);