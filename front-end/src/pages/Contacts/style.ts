import styled from "styled-components";

export const StyledDiv = styled.div`
    width : 100%;
    height : 100%;
`
export const StyledBoxSection = styled.div`
display : flex;
width : 100%;
height : 100%;

@media(max-width:700px){
    flex-direction : column;
}
`
export const StyledSection = styled.section`
display: flex;
flex-direction : column;
align-items : center;
justify-content : center;
overflow-y : auto;
width: 100%;
height: 100%;

.box__skeleton{
    width : 50%;
    height: 50%;
}
.skeleton{
    margin-bottom: 1rem;
    height: 50%;
}
`
export const StyledList = styled.ul`
    border-radius : 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap : 0.5rem;
    background : ${props=> props.theme.BACKGROUND_INPUT};
    width: 50%;
    height: 50%;
`