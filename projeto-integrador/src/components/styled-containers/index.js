import styled from "styled-components";

export const CenterPageContainer = styled.div`
  height: 88vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const CenterFeedPageContainer = styled.div`
  height: 88vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const FormContainer = styled.div`
    min-width: 40vw;
    max-width: 95vw;
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 1px solid #D5D8DE;
    padding:60px;
    margin-top: -550px;
    margin-left: 80px;
    color: #323941;

    .header {
        position: absolute;
        display:flex;
        margin-left: 0px;
        margin-top: -55px;
        justify-content: center;
        align-items: center;
    }

    .retangulo {
        width: 395px;
        height: 50px;
        background-color: #EDEDED;
        position: absolute;
        display:flex;
       
    }

    .retangulo-feed {
        position: absolute;
        display:flex;
        margin-left: 15px;
        margin-top: 98px;
        border-radius: 12px;
        background-color: #EDEDED;
        width: 364px;
        height: 131px;
    }

    .retangulo-post {
        width: 395px;
        height: 120px;
        position: absolute;
        display:flex;
        margin-left: 20px;
        margin-top: 390px;
        background: #FBFBFB;
        border: 1px solid #E0E0E0;
        border-radius: 12px;
        width: 364px;
        height: 167px;    
    }

    .logo {
        position: absolute;
        display:flex;
        margin-left: 130px;
        margin-top: 60px;
        justify-content: center;
        align-items: center;
        
    }

    .logoicon {
        position: absolute;
        display:flex;
        margin-left: 185px;
        margin-top: 10px;
        justify-content: center;
        align-items: center;
        
    }


    .seta {
        position: absolute;
        width: 20px;
        margin-left: 15px;
        margin-top: 15px;
        cursor: pointer;
    }

    .titulo {
        position: absolute;
        margin-left: 85px;
        margin-top: 200px;
    }


.titulo-signup{
    position: absolute;
    margin-left: 40px;
    margin-top: 85px;
    width: 364px;
    height: 86px;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 43px;
    color: #373737;
}

    .name {
        position: absolute;
        display:flex;
        margin-left: 40px;
        margin-top: 249px;
        width: 330px;
        height:50px;
        justify-content: center;
        align-items: center;
        border: 1px solid #D5D8DE;
    }

    .name-invalido {
        position: absolute;
        display:flex;
        margin-left: 37px;
        margin-top: 245px;
        width: 300px;
        height:50px;
        justify-content: center;
        align-items: center;
    }


    .email {
        position: absolute;
        display:flex;
        margin-left: 40px;
        margin-top: 310px;
        width: 330px;
        height:50px;
        justify-content: center;
        align-items: center;
        border: 1px solid #D5D8DE;
    }

    .email-invalido {
        position: absolute;
        display:flex;
        margin-left: -35px;
        margin-top: 328px;
        width: 300px;
        height:50px;
        justify-content: center;
        align-items: center;
    }

    .password {
        position: absolute;
        display:flex;
        margin-left: 40px;
        margin-top: 370px;
        width: 330px;
        height:50px;
        justify-content: center;
        align-items: center;
        border: 1px solid #D5D8DE;

    }

    .password-invalido {
        position: absolute;
        display:flex;
        margin-left: -35px;
        margin-top: 408px;
        width: 300px;
        height:50px;
        justify-content: center;
        align-items: center;
    }

    .politicas {
        position: absolute;
        cursor: pointer;
        margin-left: 40px;
        margin-top: 470px;
    }

    .aceito {
        position: absolute;
        cursor: pointer;
        margin-left: 40px;
        margin-top: 530px;
    }

  

    .button-cadastrar{
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        color: #FFFFFF;
        margin-left: 29px;
        margin-top: 590px;       
        border-radius: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 13px 33px;
        gap: 10px;
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        border-radius: 27px;
        position: absolute;
        width: 365px;
        height: 51px;
        border-radius: 27px;
    }


    .button-postar{
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        color: #FFFFFF;
        margin-left: 15px;
        margin-top: 260px;       
        border-radius: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 13px 33px;
        gap: 10px;
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        border-radius: 27px;
        position: absolute;
        width: 365px;
        height: 51px;
        border-radius: 17px;
    }

    .check {
        position: absolute;
        margin-left: 15px;
        margin-top: 520px;
    }

    .linha{
        position: absolute;
        display:flex;
        margin-left: 30px;
        margin-top: 550px;
        justify-content: center;
        align-items: center;
        
        }

        .linha-feed{
            position: absolute;
            display:flex;
            margin-left: 30px;
            margin-top: 580px;
            justify-content: center;
            align-items: center;
            
            }

        .comentarios{
            position: absolute;
            display:flex;
            margin-left: 15px;
            margin-top: 400px;
            justify-content: center;
            align-items: center;
            
            }

        .linha-feed{
            position: absolute;
            display:flex;
            margin-left: 15px;
            margin-top: 350px;
            justify-content: center;
            align-items: center;
            
            }

        .button-entrar {
                position: absolute;
                color: #4088CB;
                margin-left: 300px;
                margin-top: 5px;
                font-weight: 600;
                font-size: 18px; 
                cursor: pointer;          
            }
        
        
        .button-continuar {        
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        color: #FFFFFF;
        margin-left: 29px;
        margin-top: 470px;       
        border-radius: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 13px 33px;
        gap: 10px;
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        border-radius: 27px;
        position: absolute;
        width: 365px;
        height: 51px;
        border-radius: 27px;
    }


          .criar {
            font-weight: 600;
            font-size: 20px;
            text-align: center;
            position: absolute;
            width: 365px;
            height: 51px;
            margin-left: 29px;
            margin-top: 580px;
            border: 1px solid #FE7E02;
            border-radius: 27px;
            background: #FFFFFF;
            color: #FE7E02;
        
        }

        .barra{
            position: absolute;
            display:flex;
            margin-left: 150px;
            margin-top: 690px;
            justify-content: center;
            align-items: center;
        }
    
    
    .button-sair {
        position: absolute;
        color: #4088CB;
        margin-left: 300px;
        margin-top: 5px;
        font-weight: 600;
        font-size: 16px; 
        cursor: pointer;          
    }`;

    