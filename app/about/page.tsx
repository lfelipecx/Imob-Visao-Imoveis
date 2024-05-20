import BannerItem from "../_components/banner-item";

const About = () => {
    return ( 
        <div className="p-4 space-y-4">
            <h1 className="uppercase font-semibold text-xl text-primary">Sobre Nós</h1>
            <p className="text-justify text-muted-foreground">Há mais de duas décadas, a Visão Imóveis tem sido um pilar de confiança e excelência no mercado imobiliário. Fundada em 2010, nossa missão sempre foi clara: ajudar pessoas a encontrar o imóvel perfeito para suas necessidades e sonhos.

            Desde o início, nos dedicamos a entender profundamente o mercado e as necessidades de nossos clientes. Nossa equipe de profissionais experientes e apaixonados por imóveis trabalha incansavelmente para oferecer um atendimento personalizado e de alta qualidade. Acreditamos que cada cliente é único e merece uma solução sob medida.

            Nossa jornada ao longo dos anos tem sido marcada por inúmeros sucessos e conquistas. Através de um trabalho árduo, honestidade e compromisso com a satisfação do cliente, construímos uma sólida reputação e um portfólio diversificado de imóveis, que inclui residenciais, comerciais, terrenos e empreendimentos de alto padrão.

            Na Visão Imóveis, valorizamos a confiança que nossos clientes depositam em nós. Por isso, nos empenhamos em oferecer um serviço transparente e seguro, orientando cada passo do processo de compra, venda ou aluguel de imóveis. Estamos constantemente atualizados com as tendências e regulamentações do mercado, garantindo que nossos clientes recebam as melhores oportunidades e informações.

            Ao escolher a Visão Imóveis, você não está apenas escolhendo uma imobiliária, mas um parceiro dedicado a tornar seu sonho de encontrar o imóvel ideal uma realidade. Agradecemos a todos os nossos clientes e parceiros que fizeram parte dessa jornada e convidamos você a nos conhecer e descobrir o diferencial de uma empresa com mais de 20 anos de tradição e compromisso com a excelência.
            </p>

           
            <BannerItem
                src="/equipe.jpg"
                alt="equipe visão imóveis"
            />
          

        </div>
     );
}
 
export default About;