import { StyledTittle } from "./style";

interface ITittleProps{
    text: string
}

export function Tittle(props: ITittleProps){
    return(
        <StyledTittle>{props.text}</StyledTittle>
    )
}