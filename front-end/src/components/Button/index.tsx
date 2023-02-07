import { StyledSubmit } from "./style";
import {useNavigate} from "react-router-dom"

export interface ISubmitProps{
    text : string,
    to? : string
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
    isShow? : boolean;
    width? : string;
    type?: 'submit' | 'reset' | 'button' | undefined;
}

export function Button(props : ISubmitProps){

    const navigate = useNavigate()

    return(
        <StyledSubmit onClick={()=> navigate(props.to ? props.to : "")} width = {props.width ? props.width : "35%"} isShow={props.isShow ? props.isShow : false}>{props.text}</StyledSubmit>
    )
}