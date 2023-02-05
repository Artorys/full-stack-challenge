import styled from "styled-components";

export const StyledDiv = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    width: 100%;
    height: 100%;
    background-color : ${(props)=> props.theme.BACKGROUND};
`
export const StyledBackgroundForm = styled.main`
    border-radius : 10px;
    display : flex;
    align-items : center;
    justify-content : center;
    width : 90%;
    height: 98%;
    background-color : ${(props)=> props.theme.BACKGROUND_FORM};
`