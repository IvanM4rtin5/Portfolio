import { useState } from 'react';
import { NavLink, Link} from 'react-router-dom';
import { Container, Profile, Navigation, MobileMenu, MenuButton } from "./style";
import { Home, FolderKanban, User, Mail, Menu, X ,FileCode2} from 'lucide-react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <Container>
            <Profile to="/">
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQGCV800r4Jyxg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732211600144?e=1737590400&v=beta&t=JVpBbtdL3NZRglrrAagAviDZgLD1XTpgIrMwrncUSo4"
             alt="Foto do usuário"/>
                <div>
                    <span>Bem-vindo</span>
                </div>
            </Profile>

            {/* Menu para Desktop */}
            <Navigation>
                <NavLink to="/" end>
                    <Home size={20} />
                    <span>Home</span>
                </NavLink>
                <Link to="/Sobre">
                    <User size={20} />
                    <span>Sobre</span>
                </Link>
                <Link to="/Projetos">
                    <FolderKanban size={20}/>
                    <span>Projetos</span>
                </Link>
                <Link to="/skill">
                    <FileCode2 size={20} />
                    <span>Habilidades</span>
                </Link>
                <Link to="/contato">
                    <Mail size={20} />
                    <span>Contato</span>
                </Link>
            </Navigation>

            {/* Botão do Menu Mobile */}
            <MenuButton onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </MenuButton>

            {/* Menu Mobile */}
            <MobileMenu $isOpen={isMenuOpen}>
                <NavLink to="/" end onClick={toggleMenu}>
                    <Home size={20} />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/Sobre" onClick={toggleMenu}>
                    <User size={20} />
                    <span>Sobre</span>
                </NavLink>
                <NavLink to="/Projetos" onClick={toggleMenu}>
                    <FolderKanban size={20} />
                    <span>Projetos</span>
                </NavLink>
                <NavLink to="/Skill" onClick={toggleMenu}>
                    <FileCode2 size={20} />
                    <span>Habilidades</span>
                </NavLink>
                <NavLink to="/Contato" onClick={toggleMenu}>
                    <Mail size={20} />
                    <span>Contato</span>
                </NavLink>
            </MobileMenu>
        </Container>
    );
}
