import styled from 'styled-components';

// Default color is black
// Default font size of 1.5rem
const Text = styled.div`
    color: ${props => props.color ? (props.color) : '#000'};
    font-size: ${props => props.size ? (props.size) : '1.5rem'};
    margin: ${props => props.margin ? (props.margin) : null};
    padding: ${props => props.padding ? (props.padding) : null};
    text-align: ${props => props.align ? (props.align) : null};
    text-decoration: ${props => props.decoration ? (props.decoration) : null};
    font-weight: ${props => props.weight ? (props.weight) : null};
`

export default Text;