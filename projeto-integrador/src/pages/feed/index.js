import logoicon from "../../assets/logoicon.png";
import header from "../../assets/header.png";
import seta from "../../assets/seta.png";
import linha from "../../assets/linha.png";
import { Button } from "@chakra-ui/react";
import comentarios from "../../assets/comentarios.png";
import { CenterFeedPageContainer as FeedPageContainer, FormContainer} from '../../components/styled-containers';
import { goToLoginPage } from "../../routes/coordinator";
import {  useNavigate } from 'react-router-dom';
//import { Posts } from "../../constants";
//import { useEffect, useState } from "react";


export const FeedPage = () => {

  /*const [posts, setPosts] = useState([]);
  useEffect(() => {
     Posts()
     .then(data => {
      console.log(data);
     })
      .catch((e) => {
        console.log(e)
      })
  }, []);*/

    const navigate = useNavigate();


    return(
    
        <FeedPageContainer>
    <FormContainer>

            <div className="header">
          <img src={header} alt="header"/>
            </div>

            <div class="retangulo"></div>


            <div class="retangulo-feed"></div>


            <div class="seta">
            <img src={seta} alt="seta" onClick={() => goToLoginPage(navigate)} />
            </div>

            <div className="logoicon">
          <img src={logoicon} alt="logo"/>
            </div>

            <div class="sair">
            <Button onClick={() => goToLoginPage(navigate)} className="button-sair" type="submit" variant="form">Logout</Button>
            </div> 


           
           
          

     {/*  <div class="retangulo-post"></div>*/}

<Button type="submit" className="button-postar" variant="form">Postar</Button>


            <div className="comentarios">
          <img src={comentarios} alt="comentarios"/>
            </div>  

            <div className="linha-feed" as ="linha">
      <img src={linha} alt="linha"/>
      </div>

            </FormContainer>
            </FeedPageContainer>
    ) 
}

