import { Routes, Route} from "react-router-dom";
import { Home } from "../pages/Home";
import { About} from "../pages/About";
import { Contacts } from "../pages/Contact";
import { Projects } from "../pages/Projects";
import { Skills } from '../pages/Skills';

 
export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<About/>}/>
            <Route path="/projetos" element={<Projects/>}/>
            <Route path="/contato" element={<Contacts/>}/>
            <Route path="/skill" element={<Skills/>}/>
        </Routes>
    );
}
