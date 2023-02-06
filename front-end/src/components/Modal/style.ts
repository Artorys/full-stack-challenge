import styled from "styled-components";

export const StyledDiv = styled.div`
    position : fixed;
    z-index: 2;
    opacity: 0.9;
    width : 100vw;
    height: 100vh;
    background-color : black;
`
export const StyledDivButton = styled.div`
    width: 50%;
    display : flex;
    justify-content : center;
    gap: 1rem;
`

export const StyledDivEdit = styled.div`
    position : absolute;
    margin: auto auto;
    opacity: 1;
    z-index : -1;
    top : 0;
    bottom : 0;
    left : 0;
    right : 0;
    background-color : ${props=> props.theme.BACKGROUND_FORM};
`
export const StyledDivDelete = styled.div`
    position : absolute;
    width : 200px;
    height: 200px;
    background-color : ${props=> props.theme.BACKGROUND_FORM};
`