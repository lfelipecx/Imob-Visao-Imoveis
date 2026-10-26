import {
  ArrowUpRight,
  MessageCircle,
  Navigation,
  FacebookIcon,
  InstagramIcon,
  MapPin,
  YoutubeIcon,
} from "lucide-react";
import { PiTiktokLogo } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";

const ContactPage = () => {
  return (
    <>
    <main className="contact-desktop">
      <nav aria-label="Localização na página" className="contact-breadcrumb"><Link href="/">Início</Link><span>/</span><span>Contato</span></nav>
      <header className="contact-intro">
        <p className="contact-eyebrow">ESTAMOS PERTO DE VOCÊ</p>
        <h1>Seu próximo capítulo<br />começa com uma <span>conversa.</span></h1>
        <p>Tire suas dúvidas, conheça os imóveis e dê o próximo passo com a equipe da Visão Imóveis.</p>
      </header>
      <div className="contact-layout">
        <div className="contact-options">
          <section className="contact-panel contact-whatsapp">
            <div className="contact-panel-top"><span className="contact-icon"><MessageCircle size={24} /></span><span className="contact-eyebrow">FALE COM A NOSSA EQUIPE</span></div>
            <h2>Vamos encontrar seu novo imóvel?</h2>
            <p>Conte o que você procura. A gente ajuda você a conhecer as opções e entender as possibilidades de financiamento.</p>
            <Link className="contact-primary" href="https://wa.me/5561982435887?text=Vim+pelo+site+e+gostaria+de+mais+informações.">Conversar pelo WhatsApp <ArrowUpRight size={18} /></Link>
            <span className="contact-phone">(61) 98243-5887</span>
          </section>
          <section className="contact-panel contact-address">
            <span className="contact-icon"><MapPin size={24} /></span>
            <div><p className="contact-eyebrow">VENHA NOS CONHECER</p><h2>Nosso escritório</h2>
              <address>Rua Grécia, quadra 54, lote 01, lojas 09 e 10<br />Parque Esplanada 3 · Valparaíso de Goiás – GO</address>
              <a className="contact-text-link" href="https://www.google.com/maps/search/?api=1&query=Rua%20Gr%C3%A9cia%20quadra%2054%20lote%2001%20Parque%20Esplanada%203%20Valpara%C3%ADso%20de%20Goi%C3%A1s" target="_blank" rel="noopener noreferrer">Como chegar <Navigation size={15} /></a>
            </div>
          </section>
        </div>
        <aside className="contact-team">
          <Image src="/subsidio-desktop.webp" alt="Chaves de uma nova residência em condomínio" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          <div className="contact-team-caption"><p className="contact-eyebrow">PESSOAS QUE CUIDAM DA SUA CONQUISTA</p><h2>Do primeiro contato<br />a um novo começo.</h2><p>Conte com a Visão Imóveis.</p></div>
        </aside>
      </div>
      <section className="contact-social-section">
        <div><p className="contact-eyebrow">VAMOS NOS CONECTAR</p><h2>Acompanhe a Visão Imóveis</h2><p>Novidades, imóveis e conteúdo para sua próxima conquista.</p></div>
        <div className="contact-social-links">
          <a href="https://www.instagram.com/_visaoimoveis/" target="_blank" rel="noopener noreferrer"><InstagramIcon size={22} /><span>Instagram</span><ArrowUpRight size={16} /></a>
          <a href="https://www.facebook.com/profile.php?id=100071623339976&locale=pt_BR" target="_blank" rel="noopener noreferrer"><FacebookIcon size={22} /><span>Facebook</span><ArrowUpRight size={16} /></a>
          <a href="https://youtube.com/@visaoimoveis7431?si=q6p4Ydo8EJkvvuna" target="_blank" rel="noopener noreferrer"><YoutubeIcon size={22} /><span>YouTube</span><ArrowUpRight size={16} /></a>
          <a href="https://www.tiktok.com/@visaoimoveis.mkt?_t=8oTtXEeYeGL&_r=1" target="_blank" rel="noopener noreferrer"><PiTiktokLogo size={22} /><span>TikTok</span><ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
    </>
  );
};

export default ContactPage;
