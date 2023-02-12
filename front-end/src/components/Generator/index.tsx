import { useNavigate } from "react-router-dom";
import { StyledDiv } from "./style";

export function Generator(){

    const navigate = useNavigate()

    return (
        <StyledDiv onClick={()=>{
            navigate("/pdf")
        }}><p>Gerar PDF</p></StyledDiv>
    )
}