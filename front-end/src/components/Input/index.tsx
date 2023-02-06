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
    register : UseFormRegisterReturn<"email"|"full-name"|"password"|"email"|"phone">
}

export function Input(props : IInputProps){

    const ref = useRef(null)

    return(
        <StyledDiv width = {props.width ? props.width : "35%"}>
            <div className="box__input">
                <StyledLabel ref={ref} htmlFor={props.id}>{props.text}</StyledLabel>
                <InputMask {...props.register} ref={ref} className="input" mask={props.mask ? props.mask : ""} placeholder={props.placeholder} id={props.id}></InputMask>
            </div>
        </StyledDiv>
    )
}