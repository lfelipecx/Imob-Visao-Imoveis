import {
  ArrowUpRight,
  MessageCircle,
  Navigation,
  FacebookIcon,
  InstagramIcon,
  MapPin,
  Phone,
  UsersRound,
  YoutubeIcon,
} from "lucide-react";
import { PiTiktokLogo } from "react-icons/pi";
import { Card } from "../_components/ui/card";
import { Separator } from "../_components/ui/separator";
import Link from "next/link";
import Image from "next/image";

const ContactPage = () => {
  return (
    <>
    <main className="contact-desktop hidden lg:block">
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
    <div className="p-5 space-y-3 lg:hidden">
      <h1 className="uppercase text-xl text-primary font-semibold lg:text-2xl lg:ml-10">
        Contate-nos
      </h1>

      <div className="lg:flex lg:justify-center">

        <Card className="bg-zinc-900 px-3 pt-5 lg:w-[500px]">
          <div className="flex justify-center pb-2">
            <MapPin size={40} className="text-primary" />
          </div>
          <h1 className="text-center font-semibold pb-2 uppercase">Escritório</h1>
          <p className="text-sm text-center pb-5">
            Rua Grécia, qd. 54, lt 01, lojas 09 e 10,
            <br /> Parque Esplanada 3<br />
            Valparaíso de Goiás - GO
          </p>
          <Separator />

          <div className="flex flex-col gap-2 justify-center items-center py-5">
            <Phone size={40} className="text-primary" />
            <h1 className="font-semibold uppercase">Suporte Whatsapp</h1>
            <Link
              href="https://wa.me/5561982435887?text=Vim+pelo+site+e+gostaria+de+mais+informações."
              className="flex gap-2 items-center rounded-full px-2 py-2 bg-primary hover:bg-primary/90"
            >
              <div className="relative h-[25px] w-[25px]">
                <Image
                  src="/whatsapp.png"
                  alt="whatsapp"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <p className="text-sm text-zinc-900 font-semibold">61 98243-5887</p>
            </Link>
          </div>

          <Separator />

          <div className="flex justify-center pt-5">
            <UsersRound size={40} className="text-primary" />
          </div>
          <h1 className="text-center font-semibold py-2 uppercase">
            Redes Sociais
          </h1>

          <div className="flex flex-col gap-1 items-center pb-5">
            <Link
              href="https://www.instagram.com/_visaoimoveis/"
              className="flex gap-2 items-center hover:text-primary"
            >
              <InstagramIcon size={18} />
              <p className="text-sm">Instagram</p>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100071623339976&locale=pt_BR"
              className="flex gap-2 items-center hover:text-primary"
            >
              <FacebookIcon size={18} />
              <p className="text-sm">Facebook</p>
            </Link>
            <Link
              href="https://youtube.com/@visaoimoveis7431?si=q6p4Ydo8EJkvvuna"
              className="flex gap-2 items-center hover:text-primary"
            >
              <YoutubeIcon size={18} />
              <p className="text-sm">YouTube</p>
            </Link>
            <Link
              href="https://www.tiktok.com/@visaoimoveis.mkt?_t=8oTtXEeYeGL&_r=1"
              className="flex gap-2 items-center hover:text-primary"
            >
              <PiTiktokLogo size={18} />
              <p className="text-sm">TikTok</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
