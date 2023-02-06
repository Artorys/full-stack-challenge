import { StyledDiv, StyledInput, StyledLabel } from "./style";

interface IInputProps{
    id : string
    text : string
    placeholder: string
    width? : string
}

export function Input(props : IInputProps){
    return(
        <StyledDiv width = {props.width ? props.width : "35%"}>
            <div>
                <StyledLabel htmlFor={props.id}>{props.text}</StyledLabel>
                <StyledInput placeholder={props.placeholder} id={props.id}></StyledInput>
            </div>
        </StyledDiv>
    )
}