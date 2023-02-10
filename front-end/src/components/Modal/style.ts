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
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    position : absolute;
    border-radius : 10px;
    width : 200px;
    height: 200px;
    margin: auto auto;
    opacity: 1;
    top : 0;
    bottom : 0;
    left : 0;
    right : 0;
    background-color : ${props=> props.theme.BACKGROUND_FORM};

    .box__button{
        margin-right:1rem ;
        margin-left : 1rem;
        display: flex;
        gap : 1rem;
        align-items : center;
        justify-content : space-around;
    }
    .box__info{
        display: flex;
        align-items : center;
        justify-content : center;
    }
`