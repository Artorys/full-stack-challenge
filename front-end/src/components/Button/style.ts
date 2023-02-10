import styled, { css } from "styled-components";

interface IStyleProps{
    isShow : boolean;
    width : string;
    isPadding : boolean
}

export const StyledSubmit = styled.button<IStyleProps>`
    margin-top : ${(props=> props.isPadding ? "1.5rem" : "0rem")};
    margin-bottom: ${(props=> props.isPadding ? "1.5rem" : "0rem")};
    width : ${props=> props.width};
    cursor : pointer;
    overflow : hidden;
    color : ${props=> props.theme.TITTLE};
    font-weight : 600;
    border-radius : 10px;
    min-height: 50px;
    background-color : ${props=> props.theme.BACKGROUND_INPUT};
    ${(props)=>{
        if(props.isShow){
            return css`
                color : ${props=> props.theme.TEXT_HOVER};
                background-color: ${props=> props.theme.BACKGROUND_HOVER};
            `
        }
        return css`
        :hover{
            color : ${props=> props.theme.TEXT_HOVER};
            background-color : ${props=> props.theme.BACKGROUND_HOVER};
            cursor: pointer;`
        }
    }}

`