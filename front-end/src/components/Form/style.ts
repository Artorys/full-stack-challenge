import styled from "styled-components";

interface IFormProps{
    isOverflow : boolean;
    type : string;
    subtype : string;
}

export const StyledForm = styled.form<IFormProps>`
    padding-top : ${props=> props.type == "register" ? "2rem" : "0rem"};
    padding-bottom : 1rem;
    position : relative;
    overflow-y : auto;
    display: flex;
    flex-direction : column;
    justify-content : ${props=> props.isOverflow ? "none" : "center"};
    align-items : ${props=> props.type == "contact" && props.subtype == "update" ? "flex-start" : "center"};
    width : 100%;
    height : 100%;

    .div__description{
        width: 50%;
        gap: 1rem;
        display: flex;
        align-items : baseline;
        justify-content : center;
        color : ${props=> props.theme.TEXT_INPUT};
    }
    .box__button{
                width: 100%;
                display : flex;
                gap : 0.5rem;
                justify-content : center;
            }
`