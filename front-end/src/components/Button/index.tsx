import { StyledSubmit } from "./style";
import {useNavigate} from "react-router-dom"

export interface ISubmitProps{
    text : string,
    to? : string
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    isShow? : boolean;
}

export function Button(props : ISubmitProps){

    const navigate = useNavigate()

    return(
        <StyledSubmit isShow={props.isShow ? props.isShow : false}><button onClick={props.onClick ? props.onClick : ()=> navigate(props.to ? props.to : "")}>{props.text}</button></StyledSubmit>
    )
}