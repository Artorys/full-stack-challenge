import { ReactElement } from "react";
import { StyledBackgroundForm, StyledDiv } from "./style";

interface IBackgroundProps{
    children : ReactElement
}

export function BackgroundForm(props: IBackgroundProps){
    return(
        <StyledDiv>
            <StyledBackgroundForm>
                {props.children}
            </StyledBackgroundForm>
        </StyledDiv>
    )
}