import styled from 'styled-components';

const Div = styled.div`
    background-color: ${props => props.color ? (props.color) : null};
    display: ${props => props.display ? (props.display) : null};
    width: ${props => props.width ? (props.width) : null};
    height: ${props => props.height ? (props.height) : null};
    margin: ${props => props.margin ? (props.margin) : null};
    flex-direction: ${props => props.direction ? (props.direction) : null};
    align-items: ${props => props.align ? (props.align) : null};
    justify-content: ${props => props.justify ? (props.justify) : null};
    position: ${props => props.position ? (props.position) : null};
    grid-column: ${props => props.col ? (props.col) : null};
    grid-row: ${props => props.row ? (props.row) : null};
`

export default Div;