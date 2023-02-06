import styled from "styled-components";

interface IDivProps{
    width: string;
}

export const StyledDiv = styled.div<IDivProps>`
    width: ${props=> props.width};
    display: flex;
    justify-content : center;

    div{
        width: 100%;
        display: flex;
        flex-direction : column;
        justify-content : center;
        gap : 1rem;
        margin : 0.8rem;
    }
`
export const StyledLabel = styled.label`
    font-weight : 500;
    font-family: 'Roboto', sans-serif;
    color: ${(props)=> props.theme.TEXT_INPUT};
`
export const StyledInput = styled.input`
    min-width: 150px;
    max-width : 100%;
    color : ${props=> props.theme.TEXT_INPUT};
    background-color: ${(props)=> props.theme.BACKGROUND_INPUT};
    padding-bottom : 0.5rem;
    padding-top : 0.5rem;
    border-radius : 10px;

    ::placeholder{
        color : ${props=> props.theme.TEXT_INPUT};
    }
`