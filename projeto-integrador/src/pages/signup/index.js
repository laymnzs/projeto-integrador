import { useForm } from '../../hooks/use-form';
import { useState } from 'react';
import logoicon from "../../assets/logoicon.png";
import header from "../../assets/header.png";
import politicas from "../../assets/politicas.png";
import aceito from "../../assets/aceito.png";
import barra from "../../assets/barra.png";
import seta from "../../assets/seta.png";
import { Checkbox } from '@chakra-ui/react'
import { EmailInput, PasswordlInput, NameInput } from '../../components/inputs';
import { validateEmail, validatePassword, validateName } from '../../constants';
import { CenterPageContainer as SignupPageContainer, FormContainer} from '../../components/styled-containers';
import {Button} from '@chakra-ui/react';
import { goToFeedPage, goToLoginPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { Signup } from "../../constants/index"


export const SignupPage = () => {
  const navigate = useNavigate();
  

  const [form, onChangeInputs] = useForm({
    email: "",
    password: "",
    name:""
  });

 const [isEmailValid, setEmailValid] = useState(true);
 const [isPasswordValid, setIsPasswordValid] = useState(true);
 const [isNameValid, setIsNameValid] = useState(true);

  const onSubmit = async (e) => {
      e.preventDefault();
      console.log(form);
      setEmailValid(validateEmail(form.email));
      setIsPasswordValid(validatePassword(form.password));
      setIsNameValid(validateName(form.name))
      try{
        const { token } = isNameValid && isEmailValid && isPasswordValid && await Signup ({
         email: form.email,
         password: form.password,
         //name: form.name,

       });

       localStorage.setItem("Labeddit.token", token)
       goToFeedPage(navigate)
     } catch (e) {
      console.log(e)
       alert(e.response.data.message);
       
     }
    }



  return(
    <SignupPageContainer>
        <FormContainer>
          <form onSubmit={onSubmit}>

            <div className="header">
          <img src={header} alt="header"/>
            </div>

            <div class="retangulo"></div>

            <div class="seta">
            <img src={seta} alt="seta" onClick={() => goToLoginPage(navigate)} />
            </div>

            <div class="entrar">
            <Button onClick={() => goToFeedPage(navigate)} className="button-entrar" type="submit" variant="form">Entrar</Button>
            </div>

            <div className="logoicon">
          <img src={logoicon} alt="logo"/>
            </div>

            <div className="titulo-signup">
          <p>Olá, boas vindas ao LabEddit ;)</p>
            </div>

            <div className="politicas">
            <img src={politicas} alt="logo"/>
            </div>

            <div className="aceito">
            <img src={aceito} alt="logo"/>
            </div>


   <NameInput className="name"
   value={form.name}
   onChange={onChangeInputs}
   isValid={isNameValid}
   />

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
 
 <Checkbox defaultChecked className="check"></Checkbox>

 <Button onClick={() => goToFeedPage(navigate)} type="submit" className="button-cadastrar" variant="form">Cadastrar</Button>
          
          
      <div className="barra">
      <img src={barra} alt="barra"/>
      </div>
          
          </form>
        </FormContainer>

      </SignupPageContainer>
  )
}

