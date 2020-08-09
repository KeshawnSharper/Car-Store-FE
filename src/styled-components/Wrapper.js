import styled from 'styled-components';

// Wrapper with default width of 95%
// Adjusts width to 100% on small displays
const Wrapper = styled.div`
    width: ${props => props.width ? (props.width) : '70%'};
    margin: auto;

    @media(max-width: 768px) {
        width: 100%;
    }
`

export default Wrapper;