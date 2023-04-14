import { useForm } from '../../hooks/use-form';
import { useState } from 'react';
import linha from "../../assets/linha.png";
import logo from "../../assets/logo.svg";
import header from "../../assets/header.png";
import barra from "../../assets/barra.png";
import { EmailInput, PasswordlInput } from '../../components/inputs';
import { validateEmail, validatePassword } from '../../constants';
import { CenterPageContainer as LoginPageContainer, FormContainer} from '../../components/styled-containers';
import {Button} from '@chakra-ui/react';
import { goToFeedPage, goToSignupPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import {Login} from "../../constants/index"

export const LoginPage = () => {

  const navigate = useNavigate();


  const [form, onChangeInputs] = useForm({
    email: "",
    password: ""
  });

 const [isEmailValid, setEmailValid] = useState(true);
 const [isPasswordValid, setIsPasswordValid] = useState(true);

const onSubmit =  async (e) => {
      e.preventDefault();
      console.log(form);
      setEmailValid(validateEmail(form.email));
      setIsPasswordValid(validatePassword(form.password));

      /*try{
         const { token } = isEmailValid && isPasswordValid && await Login ({
          email: form.email,
          password: form.password
        });

        localStorage.setItem("Labeddit.token", token)
        goToFeedPage(navigate)
      } catch (e) {
        console.log(e)
        alert(e.response.data);
        
      }*/
      
    }


  return(
    <LoginPageContainer>
        <FormContainer>
          <form onSubmit={onSubmit}>

            <div className="header">
          <img src={header} alt="header"/>
            </div>

            <div className="logo">
          <img src={logo} alt="logo"/>
            </div>

            <div className="titulo">
          <p>O projeto de rede social da Labenu</p>
            </div>

  <EmailInput className="email" 
  value={form.email}
  onChange={onChangeInputs}
  isValid={isEmailValid}
  />
 


  <PasswordlInput className="password"
      value={form.password}
      onChange={onChangeInputs}
      type="password"
      isValid={isPasswordValid}
      />
       

    <Button onClick={() => goToFeedPage(navigate)} className="button-continuar" type="submit" variant="form">Continuar</Button>

        <div className="linha" as ="linha">
      <img src={linha} alt="linha"/>
      </div>

      <Button onClick={() => goToSignupPage(navigate)} className="criar" type="submit" variant="form">Crie uma conta!</Button>
          
          
      <div className="barra">
      <img src={barra} alt="barra"/>
      </div>
          
          </form>
        </FormContainer>

      </LoginPageContainer>
  )
}

