import styled from 'styled-components'

import Background2 from '../../assets/background.png'
import Background1 from '../../assets/background1.jpg'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url("${Background2}");
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const LoginImage = styled.img`
    width: 735px;

`

export const ContainerItens = styled.div`
    height: 100vh;
    width: 50%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    h1{
        color: #ffffff;
        font-weight: 400;
        font-size: 40px;
        font-family:"Road Rage";
    }

    span{
        color: #9758A6;
        font-weight: 400;
        font-size: 40px;
        font-family:"Road Rage";
    }

    form{
        display: flex;
        flex-direction: column;

    }
`

export const P = styled.p`
    color: #ffffff;

    margin-top: 40px;

    font-size: 18px;
    font-weight: 600;
    font-family: "Poppins";

`

export const Input = styled.input`
    width: 350px;
    height: 52px;

    border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
    border-radius: 5px;
`

export const SignInLink = styled.h2`
    color: #ffffff;

    font-size: 18px;
    font-weight: 700;
    font-family: "Poppins";

    margin-top: 40px;

    a{
        cursor: pointer;
        text-decoration: underline;

        &:hover{
        color: #6F357C;
;
        }

        &:active{
        opacity: 0.5;
        }
    }

`

export const Background = styled.h2`


    height: 100vh;
    width: 50%;
    background: url("${Background1}");
    display: flex;
    align-items: center;
    justify-content: center;

`

export const ErrorMessage = styled.p`

color: #cc1717;
margin-top: 5px;

font-size: 18px;
font-weight: 700;
font-family: "Poppins";

`