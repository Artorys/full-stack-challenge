import styled from "styled-components";

export const StyledCard = styled.li`
    color : ${props=> props.theme.TEXT_INPUT};
    border-radius : 10px;
    padding : 1rem;
    background: ${props=> props.theme.BACKGROUND_FORM};

    details{
        width: 100%;
        p{
            white-space: wrap;
            overflow: hidden;
            text-overflow : ellipsis;
            margin-bottom : 1rem;
        }
        p:first-of-type{
            margin-top : 1rem;
        }
        summary{
            width: 100%;
            white-space: wrap;
            overflow: hidden;
            text-overflow : ellipsis;

            ::marker{
                content : ""
            }

            .show__info{
                width: 100%;
                display : flex;
                justify-content : space-around;
                align-items: center;
                gap : 0.2rem;
                text-align: center;

                p{
                    cursor: pointer;

                    :hover{
                        opacity: 0.8;
                    }
                }

                svg{
                    cursor : pointer;
                    padding : 0.5rem;
                    background-color : ${props=> props.theme.BACKGROUND_HOVER};
                    border-radius : 10px;
                    width: 30px;
                    height : 30px;

                    :hover{
                        opacity: 0.8;
                    }
                }
            }
        }
        .box__content{
            display : flex;
            width : 100%;
            justify-content : space-between;
            align-items : center;
            .box__icon{
                display: flex;
                gap : 0.5rem;

                svg{
                    cursor : pointer;

                    :hover{
                        opacity : 0.8;
                    }
                }
            }
        }
        .box__delete{
                width:100%;
                height : 100%;
                text-align: center;

                .box__button{
                width: 100%;
                display : flex;
                justify-content : center;
                gap : 0.5rem;
            }
            }
    }
`