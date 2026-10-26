import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, HeartHandshake, Eye, ShieldCheck } from "lucide-react";

const About = () => {
    return ( 
        <>
        <main className="about-desktop">
            <nav className="about-breadcrumb" aria-label="Localização na página"><Link href="/">Início</Link><span>/</span><span>Quem somos</span></nav>
            <section className="about-hero">
                <div className="about-intro">
                    <p className="about-eyebrow">CONHEÇA A VISÃO IMÓVEIS</p>
                    <h1>Imóveis conectam.<br /><span>Pessoas transformam.</span></h1>
                    <p className="about-lead">Por trás de cada endereço, existe uma história. Estamos aqui para ajudar você a começar a sua.</p>
                    <Link href="/contact" className="about-button">Conheça nosso atendimento <ArrowUpRight size={18} /></Link>
                    <div className="about-since"><span /> Desde 2019, aproximando pessoas de novos começos.</div>
                </div>
                <div className="about-team-photo">
                    <Image src="/escritorio-equipe-about-desktop.webp" alt="Imagem ilustrativa de profissionais trabalhando em um escritório imobiliário moderno" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                    <div className="about-photo-caption"><p className="about-eyebrow">NOSSA EQUIPE</p><p>Ao seu lado em cada etapa.</p></div>
                </div>
            </section>
            <section className="about-story">
                <div><p className="about-eyebrow">NOSSA HISTÓRIA</p><h2>Uma visão de futuro.<br />Um cuidado com o presente.</h2></div>
                <div className="about-story-copy"><p>Fundada em 2019, a Visão Imóveis nasceu com uma missão clara: ajudar pessoas a encontrar o imóvel que combina com suas necessidades e seus sonhos.</p><p>Nosso trabalho começa por ouvir. Entendemos que cada cliente tem seu próprio momento, suas prioridades e seus planos. Por isso, nossa equipe busca oferecer um atendimento próximo e personalizado, com clareza ao longo de toda a jornada.</p><p>Mais do que apresentar imóveis, queremos ajudar você a fazer uma escolha com confiança.</p></div>
            </section>
            <section className="about-values" aria-labelledby="about-values-title">
                <div className="about-section-heading"><p className="about-eyebrow">O QUE NOS MOVE</p><h2 id="about-values-title">Nossa forma de cuidar da sua conquista.</h2></div>
                <div className="about-values-grid">
                    <article className="about-value"><span className="about-value-icon"><Eye size={25} /></span><h3>Olhar para o seu momento</h3><p>Entender suas necessidades é o primeiro passo para encontrar opções que façam sentido para você.</p></article>
                    <article className="about-value"><span className="about-value-icon"><ShieldCheck size={25} /></span><h3>Clareza em cada etapa</h3><p>Informações objetivas e transparência para que você compreenda o caminho até o seu novo imóvel.</p></article>
                    <article className="about-value"><span className="about-value-icon"><HeartHandshake size={25} /></span><h3>Atendimento de perto</h3><p>Uma equipe dedicada a ouvir, orientar e acompanhar você ao longo da sua jornada de compra.</p></article>
                </div>
            </section>
            <section className="about-cta"><div><p className="about-eyebrow">VAMOS CONVERSAR?</p><h2>Seu próximo endereço começa aqui.</h2><p>Conte seus planos. Vamos conhecer juntos as possibilidades.</p></div><Link href="https://wa.me/5561982435887?text=Vim+pelo+site+e+gostaria+de+conhecer+os+im%C3%B3veis." className="about-button">Fale com a nossa equipe <ArrowUpRight size={18} /></Link></section>
        </main>
        </>
     );
}
 
export default About;