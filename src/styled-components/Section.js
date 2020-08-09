import styled from 'styled-components';

// Section styled component
// Default background color of (244, 239, 255)
const Section = styled.section`
    background-color: ${props => props.color ? (props.color) : "rgb(244, 239, 225)"};
    display: ${props => props.display ? (props.display) : null};
    margin: ${props => props.margin ? (props.margin) : null};
    padding: ${props => props.padding ? (props.padding) : null};
    padding-top: ${props => props.top ? (props.top) : null};
    padding-bottom: ${props => props.bottom ? (props.bottom) : null};
`

export default Section;