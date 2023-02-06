import { StyledSubmit } from "./style";
import {useNavigate} from "react-router-dom"

export interface ISubmitProps{
    text : string,
    to? : string
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    isShow? : boolean;
    width? : string;
}

export function Button(props : ISubmitProps){

    const navigate = useNavigate()

    return(
        <StyledSubmit width = {props.width ? props.width : "35%"} isShow={props.isShow ? props.isShow : false}><button onClick={props.onClick ? props.onClick : ()=> navigate(props.to ? props.to : "")}>{props.text}</button></StyledSubmit>
    )
}