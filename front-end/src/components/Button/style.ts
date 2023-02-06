import styled, { css } from "styled-components";

interface IStyleProps{
    isShow : boolean;
    width : string;
}

export const StyledSubmit = styled.div<IStyleProps>`
    margin-top : 1.5rem;
    margin-bottom: 1.5rem;
    width : ${props=> props.width};
    button{
        cursor : pointer;
        color : ${props=> props.theme.TITTLE};
        font-weight : 600;
        border-radius : 10px;
        width : 100%;
        height: 50px;
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
    }

`