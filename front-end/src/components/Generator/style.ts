import styled from "styled-components";

export const StyledDiv = styled.div`
    color : ${props=> props.theme.TITTLE};
    background : ${props=> props.theme.BACKGROUND_INPUT};
    position : fixed;
    display : flex;
    align-items : center;
    justify-content : center;
    bottom : 0;
    width : 100px;
    height : 100px;
    border-radius : 50px;
    z-index : 1;
    cursor: pointer;

    :hover{
        color : ${props=> props.theme.TEXT_HOVER};
        background-color : ${props=> props.theme.BACKGROUND_HOVER};
    }
`