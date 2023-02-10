import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color : ${props=> props.theme.BACKGROUND_FORM};
    width: 100%;
    height: 60px;
`
export const StyledNav = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content : center;

    ul{
        width: 90%;
        height: 100%;
        display: flex;
        justify-content : flex-end;
        align-items : center;

        li{
            width: 100%;
            display: flex;
            justify-content : space-between;
            font-weight : 600;
            color: ${props=> props.theme.TITTLE};
            margin-right : 1rem;
            cursor: default;

            .dropdown{
                display: flex;
                flex-direction: column;
                position: absolute;
                z-index : 10;
                margin-top: 1rem;
                
                a{
                    border-radius : 10px;
                    text-align : center;
                    cursor: pointer;
                    padding: 1rem;
                    margin-top : 1rem;
                    font-weight : 400;
                    color: ${props=> props.theme.TEXT_INPUT};
                    background-color: ${props=> props.theme.BACKGROUND_INPUT};

                    :hover{
                        color : ${props=> props.theme.TEXT_HOVER};
                        background-color : ${props=> props.theme.BACKGROUND_HOVER};
                    }
                }
            }
            .dropdown__info{
                display: flex;
                z-index : 2;
                flex-direction: column;
                align-items : flex-start;
                position: absolute;
                margin-top: 1rem ;
                background-color: ${props=> props.theme.BACKGROUND_INPUT};
                border-radius : 10px;
                
                .info__box{
                    margin: 1rem;
                    p{
                        cursor: pointer;
                        padding: 0.2rem;
                        font-weight : 400;
                        color: ${props=> props.theme.TEXT_INPUT};
                    }
                }

            }
        }
    }
    
`