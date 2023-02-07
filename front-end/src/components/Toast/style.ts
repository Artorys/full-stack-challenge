import styled, { keyframes } from "styled-components";

export const animate = keyframes`
0%{
    right : -200px;
}
50%{
    right : 0px
}
75%{
    opacity: 0.5;
}
100%{
    opacity : 0;
}
`

export const StyledToast = styled.div`
border-radius : 2px;
opacity: 0;
display: flex;
justify-content : center;
align-items : center;
width : 200px;
height : 50px;
position : absolute;
right : 0px;
top : 0;
background : ${props=> props.theme.TEXT_ERROR};
animation : ${animate} 2s;
p{
    font-weight : 600;
    color : ${props=> props.theme.TITTLE}
}

`