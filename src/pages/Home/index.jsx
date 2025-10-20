import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import BackgroundParticles from "../../components/Background";
import {
  Container,
  Background,
  Form,
  LinksContainer,
  LanguageSwitcher
} from "./styles";
import {
  FaAddressBook,
  FaHome,
  FaRegFileCode,
  FaList
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      {/* Wrapper para manter os botões visíveis */}
      <div style={{ position: "relative", width: "100%" }}>
        <LanguageSwitcher>
          <button onClick={() => changeLanguage("pt")}>
            <img src="/images/brazil.png" alt="Português" width="24" />
          </button>
          <button onClick={() => changeLanguage("en")}>
            <img src="/images/united-states.png" alt="english" width="24" />
          </button>
        </LanguageSwitcher>

        <BackgroundParticles />

        <Form>
          <h1>Ivan Martins</h1>
          <h2>{t("home.description")}</h2>

          <LinksContainer>
            <Link to="/Sobre">
              <Button title={t("home.about")} icon={FaHome} />
            </Link>
            <Link to="/contato">
              <Button title={t("home.contact")} icon={FaAddressBook} />
            </Link>
            <Link to="/Projetos">
              <Button title={t("home.projects")} icon={FaRegFileCode} />
            </Link>
            <Link to="/skill">
              <Button title={t("home.skills")} icon={FaList} />
            </Link>
          </LinksContainer>
        </Form>

        <Background />
      </div>
    </Container>
  );
}
