import styled from 'styled-components';

const Image = styled.div`
    background-image: url(${props => props.image});
    background-size: ${props => props.size ? (props.size) : 'cover'};
    background-position: ${props => props.position ? (props.position) : 'center'};
    width: ${props => props.width ? (props.width) : null};
    height: ${props => props.height ? (props.height) : null};
    opacity: ${props => props.opacity ? (props.opacity) : null};
`

export default Image;