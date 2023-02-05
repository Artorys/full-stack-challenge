import styled from "styled-components";

export const StyledCard = styled.li`
    color : ${props=> props.theme.TEXT_INPUT};
    border-radius : 10px;
    padding : 1rem;
    background: ${props=> props.theme.BACKGROUND_FORM};

    details{
        p{
            margin-bottom : 1rem;
        }
        p:first-of-type{
            margin-top : 1rem;
        }
    }
`