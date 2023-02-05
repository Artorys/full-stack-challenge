import { StyledCard } from "./style";

export function Card(){
    return(
        <StyledCard>
            <details>
                <summary>Contato{}</summary>
                <p>Nome: {}</p>
                <p>Telefone: {}</p>
                <p>Email: {}</p>
                <p></p>
            </details>
        </StyledCard>
    )
}