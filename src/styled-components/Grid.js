import styled from 'styled-components';

// Two column grid with a .5rem row gap
// Adjusts to a one column on small displays
const Grid = styled.div`
    display: grid;
    grid-template-col: 1fr 1fr;
    grid-template-row: auto;
    grid-row-gap .5rem;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin: auto;
    }
`

export default Grid;