import styled from "styled-components";

export const StyledList = styled.ul`
    border-radius : 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    overflow-y : auto;
    gap : 0.5rem;
    background : ${props=> props.theme.BACKGROUND_INPUT};
    width: 50%;
    height: 60%;

    .box__description{
        color: ${props=> props.theme.TITTLE};
        width  :100%;
        height : 100%;
        display : flex;
        gap : 1rem;
        flex-direction : column;
        justify-content : center;
        align-items: center;
    }
`