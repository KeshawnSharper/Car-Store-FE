import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styled from '../../styled-components/Styled';

const mapStateToProps = (state) => {
    return {
        cupcake: state.cupcake,
    }
}

// Component that displays all cupcake items in the store
// Loops through all cupcakes and displays two columns per row
class CupCakes extends Component {
    render() { 
        return (
            <Styled.Section top="20px" bottom="20px">
            {/* Section with a top and bottom padding of 20px each */}

                <Styled.Wrapper width="90%">
                    <Styled.Grid>

                        {/* Loops through state for every cake item */}
                        {/* Displays every item in a two column layout */}

                        {this.props.cupcake.map((cupcake, i) => (

                            <Styled.Div key={cupcake.id} display="flex" col={i%2 === 0 ? (1): 2} 
                                style={{cursor: "pointer"}} onClick={() => this.props.toggle(cupcake)}>
                                {/* For each item, display two columns */}
                                {/* Mouse becomes pointer on hover */}
                                {/* On click calls main page to open dialog */}

                                {/* Left column, display cupcake image */}
                                <Styled.Image image={cupcake.img} height="32vh" width="45%" />

                                {/* Right column, title and description */}
                                <Styled.Div width="55%" display="flex" direction="column" align="center" justify="center">
                                    <Styled.Text size="2.4rem">{cupcake.title}</Styled.Text>
                                    <Styled.Text>{cupcake.desc}</Styled.Text>
                                </Styled.Div>
                            </Styled.Div>
                        ))}

                    </Styled.Grid>
                </Styled.Wrapper>
            </Styled.Section>
        );
    }
}
 
export default connect (mapStateToProps) (CupCakes);