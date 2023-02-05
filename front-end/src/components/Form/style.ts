import styled from "styled-components";

interface IFormProps{
    isOverflow : boolean
}

export const StyledForm = styled.form<IFormProps>`
    position : relative;
    overflow-y : auto;
    display: flex;
    flex-direction : column;
    justify-content : ${props=> props.isOverflow ? "none" : "center"};
    align-items : center;
    width : 100%;
    height : 100%;

    .div__description{
        width: 50%;
        gap: 1rem;
        display: flex;
        align-items : baseline;
        justify-content : center;
        color : ${props=> props.theme.TEXT_INPUT};

        .description{

        }
    }
`