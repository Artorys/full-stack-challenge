import { ReactElement, ReactNode } from "react"
import { StyledP } from "./style"
import { FieldError, Merge } from "react-hook-form";

interface IDescriptionProps{
    children : string
}
export function Description(props : IDescriptionProps){
    return(
        <StyledP>{props.children}</StyledP>
    )
}