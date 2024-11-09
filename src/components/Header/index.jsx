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
            <img src="https://media.licdn.com/dms/image/v2/D4E03AQF7i72vOBrriQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730224206177?e=1735776000&v=beta&t=tQEih7MNsOSEqxCW1ZkISvxpQcD4GG_IpWUL-icyoBg "
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