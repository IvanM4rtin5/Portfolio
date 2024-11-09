import { Routes, Route} from "react-router-dom";
import { Home } from "../pages/Home";
import { Sobre} from "../pages/Sobre";
import { Contatos } from "../pages/Contato";
import { Projetos } from "../pages/Projetos";
import { Habilidades } from '../pages/Skill';

 
export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/projetos" element={<Projetos/>}/>
            <Route path="/contato" element={<Contatos/>}/>
            <Route path="/skill" element={<Habilidades/>}/>
        </Routes>
    );
}
