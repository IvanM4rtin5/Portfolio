// Contato/index.jsx
import { useRef } from 'react';
import { Header } from '../../components/Header';
import { Button } from '../../components/button';
import emailjs from 'emailjs-com';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Container, ContactWrapper, ContactInfo, ContactForm } from "./styles";


export function Contacts() {
    // console.log(
    //         import.meta.env.VITE_SERVICE_ID,
    //         import.meta.env.VITE_TEMPLATE_ID,
    //          import.meta.env.VITE_PUBLIC_KEY 
    // )
    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            event.target,
            import.meta.env.VITE_PUBLIC_KEY 
        )
        .then((result) => {
            alert('Mensagem enviada com sucesso!');
            event.target.reset(); 
        })
        .catch((error) => {
            alert('Erro ao enviar a mensagem, tente novamente.');
        });
    };
    return (
        <Container>
          <Header/>
            <ContactWrapper>
                <h1>Entre em Contato</h1>
                
            <ContactInfo>
            <div >
            <a href="mailto:ivanmarti.alves@gmail.com" target="_blank" rel="noopener noreferrer" style={{  marginRight: '32px'}} >
                <Mail size={20}
                />
                <span>Email</span>
            </a>
            <a href="tel:+5582998296640" style={{  marginRight: '32px'}} >
                <Phone size={20} />
                <span>(82) 99829-6640</span>
            </a>
            <a href="https://www.linkedin.com/in/ivan-martins-alves/" target="_blank" rel="noopener noreferrer" style={{  marginRight: '32px'}} >
                <Linkedin size={20} />
                <span>LinkedIn</span>
            </a>
            <a href="https://github.com/IvanM4rtin5" target="_blank" rel="noopener noreferrer" style={{  marginRight: '32px'}} >
                <Github size={20} />
                <span>GitHub</span>
            </a>
            <a
                href="https://wa.me/5582998296640?text=Olá,%20Gostaria%20de%20Conhecer%20Seu%20Trabalho"
                target="_blank"
                aria-label="Abrir Conversa no Whatsapp"
            >
                <img
                src="https://img.icons8.com/color/20/000000/whatsapp--v1.png"
                alt="Whatsapp"
                />
                <span>Fale Comigo</span>
            </a>
                </div>
            </ContactInfo>

            {/* Botão separado */}
            <div style={{ maxWidth: '220px', marginBottom: '32px' }}>
            <a
                href="https://docs.google.com/document/d/1cYBa9HRPP5ztBEPl2o1HkNDp-dQ1wT87zNNvEoZk3lg/export?format=pdf"
                download="Cv-Ivan.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button title="Baixar Currículo" />
            </a>
            </div>
                
                
                <ContactForm>
                    <form onSubmit={handleSubmit} >
                        <div className="input-group">
                            <label htmlFor="name">Nome</label>
                            <input type="text" id="name" name="name" placeholder="Seu nome" />
                        </div>
                        
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="seu@email.com" />
                        </div>
                        
                        <div className="input-group">
                            <label htmlFor="message">Mensagem</label>
                            <textarea id="message" name="message" placeholder="Sua mensagem"></textarea>
                        </div>

                        <button 
                        
                        type="submit">
                            Enviar Mensagem
                        </button>

                    
                    </form>
                </ContactForm>
            </ContactWrapper>
        </Container>
    );
}
