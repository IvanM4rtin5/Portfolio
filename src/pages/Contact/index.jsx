import { Header } from '../../components/Header';
import { Button } from '../../components/button';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Container, ContactWrapper, ContactInfo, ContactForm } from "./styles";
import { useTranslation } from "react-i18next";

export function Contacts() {
    const { t, i18n } = useTranslation();
    const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then(() => {
        alert(t('contact.successMessage'));
        form.reset();
      })
      .catch(() => {
        alert(t('contact.errorMessage'));
      });
  };
    return (
        <Container>
            <Header />
            <ContactWrapper>
                <h1>{t("contact.title")}</h1>

                <ContactInfo>
                    <div>
                        <a
                            href="mailto:ivanmarti.alves@gmail.com"
                            style={{ marginRight: '32px' }}
                            aria-label="Enviar e-mail para ivanmarti.alves@gmail.com"
                        >
                            <Mail size={20} />
                            <span>Email</span>
                        </a>
                        <a href="tel:+5582998296640" style={{ marginRight: '32px' }}>
                            <Phone size={20} />
                            <span>(82)99829-6640</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ivan-martins-alves/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginRight: '32px' }}
                        >
                            <Linkedin size={20} />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/IvanM4rtin5"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginRight: '32px' }}
                        >
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
                            <span>{t('contact.whatsapp')}</span>
                        </a>
                    </div>
                </ContactInfo>

                <div style={{ maxWidth: '220px', marginBottom: '32px' }}>
                    <a
                        href="https://docs.google.com/document/d/1cYBa9HRPP5ztBEPl2o1HkNDp-dQ1wT87zNNvEoZk3lg/export?format=pdf"
                        download="Cv-Ivan.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button title={t('contact.downloadCV')} />
                    </a>
                </div>

                <ContactForm>
                    <form
                      action="https://formsubmit.co/ivanmat@martcode.com.br"
                      method="POST"
                      onSubmit={handleSubmit}
                    >
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_subject" value="Nova mensagem do portfólio!" />

                        <div className="input-group">
                            <label htmlFor="name">{t('contact.name')}</label>
                            <input type="text" id="name" name="name" placeholder={t('contact.namePlaceholder')} required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder={t('contact.emailPlaceholder')} required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="message">{t('contact.message')}</label>
                            <textarea id="message" name="message" placeholder={t('contact.messagePlaceholder')} required></textarea>
                        </div>

                        <button type="submit">{t('contact.sendButton')}</button>
                    </form>
                </ContactForm>
            </ContactWrapper>
        </Container>
    );
}
