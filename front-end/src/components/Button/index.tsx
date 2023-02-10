import { StyledSubmit } from "./style";
import {useNavigate} from "react-router-dom"

export interface ISubmitProps{
    text : string,
    to? : string
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    isShow? : boolean;
    width? : string;
    type?: 'submit' | 'reset' | 'button' | undefined;
    isPadding?: boolean
}

export function Button(props : ISubmitProps){

    const navigate = useNavigate()

    return(
        <StyledSubmit isPadding={props.isPadding ? props.isPadding : false} onClick={(eve)=> {
            navigate(props.to ? props.to : "")
            if(props.onClick){
                props.onClick(eve)
            }
        }} width = {props.width ? props.width : "35%"} isShow={props.isShow ? props.isShow : false}>{props.text}</StyledSubmit>
    )
}