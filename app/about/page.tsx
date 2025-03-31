import BannerItem from "../_components/banner-item";

const About = () => {
    return ( 
        <div className="p-4 space-y-4 lg:mx-10">
            <h1 className="uppercase font-semibold text-xl text-primary lg:text-2xl">Sobre Nós</h1>

            <div className="lg:flex gap-3">

                <p className="text-justify text-muted-foreground lg:py-[100px] lg:text-xl">Há anos a Visão Imóveis tem sido um pilar de confiança e excelência no mercado imobiliário. Fundada em 2019, nossa missão sempre foi clara: ajudar pessoas a encontrar o imóvel perfeito para suas necessidades e sonhos. Desde o início, nos dedicamos a entender profundamente o mercado e as necessidades de nossos clientes. Nossa equipe de profissionais experientes e apaixonados por imóveis trabalha incansavelmente para oferecer um atendimento personalizado e de alta qualidade. Acreditamos que cada cliente é único e merece uma solução sob medida. Nossa jornada ao longo dos anos tem sido marcada por inúmeros sucessos e conquistas. 
                </p>

            
                <BannerItem
                    src="/equipe.jpg"
                    alt="equipe visão imóveis"
                />
            

            </div>

        </div>
     );
}
 
export default About;