import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { Container, Form, Content } from "./style"
import { Header} from "../../components/Header"


export function About(){
    const { t, i18n } = useTranslation();
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  return (
    <Container>
     <Header />
      <main>
        <Form>
        <h1>{t("about.title")}</h1>
            
       <h2>{t("about.subtitle")} </h2>
       <Content>
          <p> 
          <img src="https://avatars.githubusercontent.com/u/160087356?s=400&u=6fbb5e29788bb1b2c6899fe1f3ef7597f7d340f8&v=4"alt="Foto do usuário"/>
          {t("about.description")}
          </p>

          </Content>
        </Form>
        
      </main>
    </Container>
  )
}
