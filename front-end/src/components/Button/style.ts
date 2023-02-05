import styled, { css } from "styled-components";

interface IStyleProps{
    isShow : boolean;
}

export const StyledSubmit = styled.div<IStyleProps>`
    margin-top : 1.5rem;
    margin-bottom: 1.5rem;
    width : 35%;
    button{
        cursor : pointer;
        color : ${props=> props.theme.TITTLE};
        font-weight : 600;
        border-radius : 10px;
        min-width: 150px;
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