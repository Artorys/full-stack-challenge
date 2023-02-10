import styled, { keyframes } from "styled-components";

interface IToastType{
    type: "success" | "error"
}

export const animate = keyframes`
0%{
    opacity: 0;
}
50%{
    opacity: 1;
}
100%{
    opacity: 0;
}

`

export const StyledToast = styled.div<IToastType>`
border-radius : 2px;
opacity: 1;
display: flex;
justify-content : center;
text-align: center;
align-items : center;
width : 200px;
height : 50px;
position : absolute;
z-index : 3;
right : 0px;
top : 0;
background : ${props=> props.type == "success" ? props.theme.TEXT_SUCCESS : props.theme.TEXT_ERROR};
animation : ${animate} 2s;
p{
    font-weight : 600;
    color : ${props=> props.theme.TITTLE}
}

`