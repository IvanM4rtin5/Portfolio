// Contato/index.jsx
import { Header } from '../../components/Header';
import { Button } from '../../components/button';
import emailjs from 'emailjs-com';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Container, ContactWrapper, ContactInfo, ContactForm } from "./styles";

export function Contacts() {
    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            'seu id',
            'template id',
            event.target,
            'jafsjfh' 
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
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ivanmarti.alves@gmail.com&su=Assunto%20do%20Email&body=Olá%2C%20Ivan%21%20Gostaria%20de%20falar%20sobre%20um%20projeto." target="_blank" rel="noopener noreferrer">
                        <Mail size={20} />
                        <span>ivanmarti.alves@gmail.com</span>
                    </a>
                    <a href="tel:+5582998296640">
                        <Phone size={20} />
                        <span>(82) 99829-6640</span>
                    </a>
                    <a href="https://www.linkedin.com/in/ivan-martins-2948572b1/" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/IvanM4rtin5" target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                        <span>GitHub</span>
                    
                    </a>
                    {/* Botão para baixar o currículo */}
                    <a href="https://docs.google.com/document/d/1Jmp6VpPOdXkQQStRseRUlp4u_fsTx8nwAkyQ0PF4iHk/export?format=pdf" download="Cv-Ivan.pdf" target="_blank">
                        <Button title="Baixar Currículo"/>
                    </a>
                </ContactInfo>
                
                <ContactForm>
                    <form onSubmit={handleSubmit}>
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

                        <button type="submit">Enviar Mensagem</button>
                    </form>
                </ContactForm>
            </ContactWrapper>
        </Container>
    );
}
