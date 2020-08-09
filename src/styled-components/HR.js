import styled from 'styled-components';

// Horizontal rule with a height of 1px
const HR = styled.div`
    background-color: ${props => props.color ? (props.color) : 'rgb(51,51,51)'};
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    height: 1px;
    width: ${props => props.width ? (props.width) : "100%"};
`

export default HR;