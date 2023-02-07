import { useRef } from "react";
import { StyledDiv, StyledLabel } from "./style";
import InputMask from "react-input-mask"
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps{
    id : string
    text : string
    placeholder: string
    width? : string
    mask? : string
    register : UseFormRegisterReturn<"email"|"full_name"|"password"|"email"|"phone">
}

export function Input(props : IInputProps){

    return(
        <StyledDiv width = {props.width ? props.width : "35%"}>
            <div className="box__input">
                <StyledLabel htmlFor={props.id}>{props.text}</StyledLabel>
                {props.mask ?
                <InputMask mask={props.mask} {...props.register} className="input" placeholder={props.placeholder} id={props.id}></InputMask>
                :
                <input {...props.register} className="input" placeholder={props.placeholder} id={props.id}></input>}
            </div>
        </StyledDiv>
    )
}