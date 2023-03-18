import styled from "styled-components";

export const LoginPageContainer = styled.div`
    height: 88vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E5E5E5;

`;

export const FormContainer = styled.div`
    min-width: 40vw;
    max-width: 95vw;
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 10px;
    padding:30px;


    input, p, button{
        margin-bottom:10px;
    }
 
`