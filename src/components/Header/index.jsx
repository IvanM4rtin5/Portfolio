import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container, Profile, Navigation, MobileMenu, MenuButton, LanguageButton } from "./style";
import { Home, FolderKanban, User, Mail, Menu, X, FileCode2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';


export function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Container>
            <Profile to="/">
                <img src="https://avatars.githubusercontent.com/u/160087356?s=400&u=6fbb5e29788bb1b2c6899fe1f3ef7597f7d340f8&v=4" alt="Foto do usuário" />
                <div>
                    <span>{t('header.title')}</span>
                </div>
            </Profile>


            {/* Menu para Desktop */}
            <Navigation>
                <NavLink to="/" end>
                    <Home size={20} />
                    <span>{t('header.home')}</span>
                </NavLink>
                <Link to="/Sobre">
                    <User size={20} />
                    <span>{t('home.about')}</span>
                </Link>
                <Link to="/Projetos">
                    <FolderKanban size={20} />
                    <span>{t('home.projects')}</span>
                </Link>
                <Link to="/skill">
                    <FileCode2 size={20} />
                    <span>{t('home.skills')}</span>
                </Link>
                <Link to="/contato">
                    <Mail size={20} />
                    <span>{t('home.contact')}</span>
                </Link>
                <div style={{ display: "flex", gap: "8px", marginLeft: "auto" }}>
                    <LanguageButton onClick={() => changeLanguage("pt")}>
                        <img src="/images/brazil.png" alt="Português" width="20" />
                    </LanguageButton>
                    <LanguageButton onClick={() => changeLanguage("en")}>
                        <img src="/images/united-states.png" alt="English" width="20" />
                    </LanguageButton>
                </div>
            </Navigation>

            {/* Botão do Menu Mobile */}
            
            <MenuButton onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </MenuButton>
            

            {/* Menu Mobile */}
            <MobileMenu $isOpen={isMenuOpen}>
                <NavLink to="/" end onClick={toggleMenu}>
                    <Home size={20} />
                    <span>{t('header.home')}</span>
                </NavLink>
                <NavLink to="/Sobre" onClick={toggleMenu}>
                    <User size={20} />
                    <span>{t('home.about')}</span>
                </NavLink>
                <NavLink to="/Projetos" onClick={toggleMenu}>
                    <FolderKanban size={20} />
                    <span>{t('home.projects')}</span>
                </NavLink>
                <NavLink to="/Skill" onClick={toggleMenu}>
                    <FileCode2 size={20} />
                    <span>{t('home.skills')}</span>
                </NavLink>
                <NavLink to="/Contato" onClick={toggleMenu}>
                    <Mail size={20} />
                    <span>{t('home.contact')}</span>
                </NavLink>

                {/* Button Lunguagens */}
                <div style={{ display: "flex", gap: "8px", marginTop:"8px" }}>
                    <LanguageButton onClick={() => changeLanguage("pt")}>
                        <img src="/images/brazil.png" alt="Português" width="20" />
                    </LanguageButton>
                    <LanguageButton onClick={() => changeLanguage("en")}>
                        <img src="/images/united-states.png" alt="English" width="20" />
                    </LanguageButton>
                </div>
            </MobileMenu>

        </Container>
    );
}
