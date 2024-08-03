const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();


const createUnderConstruction = async () => {

    const underConstructionCategory = await prismaClient.category.create ({
        data: {
            name: "Em Construção",
            imageUrl: "https://picsum.photos/id/237/200/300",
            slug: "planta"
        }
    })

    
    const underConstructionEnterprise = [
        {
            name: "Residencial Solar Park",
            price: 208,
            imageUrls: [
                "https://i.ibb.co/Jns8D2Q/solar01.jpg",
                "https://i.ibb.co/yV5XssG/solar02.jpg",
                "https://i.ibb.co/b1FSgbD/solar03.jpg",
                "https://i.ibb.co/8NW9q98/solar04.jpg",
            ],
            description: "O Residencial Solar Park I é a oportunidade de você escrever sua história na Cidade Ocidental. Ele fica na entrada da cidade, próximo ao ponto de ônibus, mercados, posto de saúde e escolas. Além disso, os apartamentos são vazados e possuem dois quartos, sala, cozinha, banheiro e área de serviço.",
            bathroom: 1,
            room: 2,
            garage: 1,
            city: "Ocidental",
            address: "Recreio Mossoró",
            category: {
                connect: {
                    id: underConstructionCategory.id,
                }
            }
        },
        {
            name: "Residencial Green Park 5 Club",
            price: 208,
            imageUrls: [
                "https://i.ibb.co/d58C7HJ/Green10.jpg",
                "https://i.ibb.co/B4C8zmP/Green02.jpg",
                "https://i.ibb.co/Y8pbKCh/Green05.jpg",
                "https://i.ibb.co/TTyMQjp/Green04.jpg",
            ],
            description: "Green Park 5 Club oferece lazer completo, que inclui piscina, quadra poliesportiva e salão de festas, os moradores podem desfrutar de momentos de relaxamento e diversão. Os apartamentos de dois quartos, com área de serviço, destacam-se por serem vazados e proporcionando um ambiente arejado.",
            bathroom: 1,
            room: 2,
            garage: 1,
            city: "Valparaíso 1",
            address: "Etapa C",
            category: {
                connect: {
                    id: underConstructionCategory.id,
                }
            }
        },
        {
            name: "Residencial Monte Alegre",
            price: 208,
            imageUrls: [
                "https://i.ibb.co/FWkywgy/Green02.jpg",
                "https://i.ibb.co/ZXP1KYc/Green05.jpg",
                "https://i.ibb.co/TL2TjmZ/Green09.jpg",
                "https://i.ibb.co/9swtf1S/Green01.jpg",
            ],
            description: "O residencial Monte Alegre é o novo empreendimento do Grupo Gois, este condomínio conta com playground para crianças, apartamentos com dois quartos e varanda. Além disso, se localiza na cidade de Valparaíso de Goiás.",
            bathroom: 1,
            room: 2,
            garage: 1,
            city: "Valparaíso 1",
            address: "Ipiranga",
            category: {
                connect: {
                    id: underConstructionCategory.id,
                }
            }
        },
        {
            name: "Residencial Bruno Patrocínio",
            price: 208,
            imageUrls: [
                "https://i.ibb.co/pbLVyVc/juda03.png",
                "https://i.ibb.co/9Y32SVx/juda00.png",
                "https://i.ibb.co/MSsSP20/juda01.png",
                "https://i.ibb.co/10zYPCh/juda02.png",
            ],
            description: "O residencial Bruno Patrocínio é o novo empreendimento do Grupo Gois, este condomínio conta com playground para crianças, apartamentos com dois quartos e varanda. Além disso, se localiza na cidade de Valparaíso de Goiás.",
            bathroom: 1,
            room: 2,
            garage: 1,
            city: "Valparaíso 2",
            address: "Chácaras Anhanguera",
            category: {
                connect: {
                    id: underConstructionCategory.id,
                }
            }
        },
        {
            name: "Bahamas Club Residence",
            price: 198,
            imageUrls: [
                "https://i.ibb.co/k4mZ2nq/bahamas00.jpg",
                "https://i.ibb.co/Jk5Ymcf/bahamas01.jpg",
                "https://i.ibb.co/M2hkSTY/bahamas02.jpg",
                "https://i.ibb.co/zJXj9fR/bahamas03.jpg",
            ],
            description: "Tenha mais qualidade de vida morando em um clube residencial com lazer completo, apartamentos com varandas e área externa nas unidades de térreo, não perca essa oportunidade de morar no residencial mais moderno de Águas Lindas.",
            bathroom: 1,
            room: 2,
            garage: 1,
            city: "Águas Lindas de Goiás",
            address: "Setor 11",
            category: {
                connect: {
                    id: underConstructionCategory.id,
                }
            }
        },
        {
            name: "Residencial Antonella",
            price: 208,
            imageUrls: [
                "https://i.ibb.co/YddYPR7/antonella00.jpg",
                "https://i.ibb.co/7tR8PXL/antonella02.jpg",
                "https://i.ibb.co/L5thydX/antonella05.jpg",
                "https://i.ibb.co/3RrwvR4/antonella01.jpg",
            ],
            description: "Bem-vindo ao Residencial Antonella, onde conforto e conveniência se encontram. Localizado em uma área privilegiada, este empreendimento oferece lazer completo com piscina, salão de festas, churrasqueira e playground. Tudo isso a poucos passos de escolas, hospitais, e um variado comércio local. Ideal para quem busca qualidade de vida e praticidade no dia a dia.",
            bathroom: 1,
            room: 2,
            garage: 1,
            city: "Valparaíso 1",
            address: "Esplanada V",
            category: {
                connect: {
                    id: underConstructionCategory.id,
                }
            }
        },
        {
            name: "Residencial Florais Park",
            price: 208,
            imageUrls: [
                "https://i.ibb.co/DM2NTw3/forais00.jpg",
                "https://i.ibb.co/nDhkkGV/florais01.jpg",
                "https://i.ibb.co/Q6nGS8J/florais02.jpg",
                "https://i.ibb.co/nPm5M03/florais03.jpg",
            ],
            description: "Um enclave residencial que oferece um estilo de vida excepcional. Com lazer completo, que inclui piscina, quadra poliesportiva e salão de festas. Os apartamentos de dois quartos, com área de serviço, destacam-se por serem vazados e proporcionando um ambiente arejado. Além disso, tem uma localização privilegiada a apenas 5 minutos do Shopping Sul.",
            bathroom: 1,
            room: 2,
            garage: 1,
            city: "Valparaíso 1",
            address: "Etapa C",
            category: {
                connect: {
                    id: underConstructionCategory.id,
                }
            }
        },
        {
            name: "Recanto Roriz",
            price: 215,
            imageUrls: [
                "https://i.ibb.co/d7jCynm/roriz00.jpg",
                "https://i.ibb.co/xgWxrTD/roriz03.jpg",
                "https://i.ibb.co/ZScGZ4Y/roriz01.jpg",
                "https://i.ibb.co/QNrkm0x/roriz02.jpg",
            ],
            description: "O Residencial Recanto Roriz, localizado em Jardim Ingá- Luziânia, conta com uma excelente localização, apenas 750m da Avenida Lucena Roriz. Próximo do VAPT-VUPT, parada de ônibus, escolas e a poucos passos de uma das avenidas mais movimentadas do Jardim Ingá. Quem quer viver com praticidade e qualidade de vida escolhe o Residencial Recanto Roriz.",
            bathroom: 1,
            room: 2,
            garage: 1,
            city: "Luziânia",
            address: "Jardim Ingá",
            category: {
                connect: {
                    id: underConstructionCategory.id,
                }
            }
        },
        {
            name: "Ilhas do Cerrado Residencial",
            price: 140,
            imageUrls: [
                "https://i.ibb.co/XLRtCbM/cerrado00.png",
                "https://i.ibb.co/31ZM1G3/cerrado01.png",
                "https://i.ibb.co/vQL9y9K/cerrado02.png",
                "https://i.ibb.co/f9SdZgc/cerrado03.png",
            ],
            description: "Um empreendimento com localização privilegiada, próximo a áreas comerciais e principais vias de acesso. Com um acabamento impecável, este projeto reflete o conforto e a qualidade que nossos clientes merecem e conta com guarita, piscina adulto e infantil, churrasqueiras, banheiros coletivos e playground.",
            bathroom: 1,
            room: 2,
            garage: 1,
            city: "Valparaíso 2",
            address: "Chácaras Brasil",
            category: {
                connect: {
                    id: underConstructionCategory.id,
                }
            }
        },
        {
            name: "Residencial Judá",
            price: 195,
            imageUrls: [
                "https://i.ibb.co/9Y32SVx/juda00.png",
                "https://i.ibb.co/MSsSP20/juda01.png",
                "https://i.ibb.co/pbLVyVc/juda03.png",
                "https://i.ibb.co/10zYPCh/juda02.png",
            ],
            description: "O Residencial Judá é a oportunidade de você escrever sua história em Santo Antônio do Descoberto. Ele fica no centro, próximo ao ponto de ônibus, mercados, posto de saúde e escolas. Além disso, os apartamentos são vazados, possuem dois quartos, sala, cozinha, banheiro e área de serviço e ficam em um residencial fechado com guarita, vaga na garagem e parque infantil.",
            bathroom: 1,
            room: 2,
            garage: 1,
            city: "Santo Antônio do Descoberto",
            address: "Centro",
            category: {
                connect: {
                    id: underConstructionCategory.id,
                }
            }
        },
        {
            name: "Bella Vitta Club Residence V",
            price: 195,
            imageUrls: [
                "https://i.ibb.co/8Px8ybV/Bella-Vita00.jpg",
                "https://i.ibb.co/FVfGFtM/Bella-Vita01.jpg",
                "https://i.ibb.co/3pMq9R8/Bella-Vita02.jpg",
                "https://i.ibb.co/6JKmJp0/Bella-Vita03.jpg",
            ],
            description: "Opção ideal para você e sua família viverem em um ambiente residencial com todas as comodidades de um clube, permitindo que vocês deixem de pagar aluguel de uma vez por todas. Club Residence V oferece unidades térreo com garden. Apartamentos possuem 2 quartos, proporcionando espaço confortável para toda a família. Além disso, a área de lazer conta com piscinas, churrasqueira, salão de festas e bicicletário.",
            bathroom: 1,
            room: 2,
            garage: 1,
            city: "Águas Lindas de Goiás",
            address: "Setor 8",
            category: {
                connect: {
                    id: underConstructionCategory.id,
                }
            }
        },
        {
            name: "Residencial Villa Campos",
            price: 195,
            imageUrls: [
                "https://i.ibb.co/5K9F7kk/Villa-Campos00.jpg",
                "https://i.ibb.co/R97gPdN/Villa-Campos01.jpg",
                "https://i.ibb.co/nrtWBWS/Villa-Campos02.jpg",
                "https://i.ibb.co/fQWYMj9/Villa-Campos03.jpg",
            ],
            description: "Apartamento dos Sonhos - 100% Financiado pelo Minha Casa Minha Vida! Imagine viver em um lugar onde o conforto e a diversão se encontram! Apresentamos a você este incrível apartamento com lazer completo, pronto para transformar a sua qualidade de vida. Lazer Completo: Piscina, academia, salão de festas, churrasqueira e muito mais!",
            bathroom: 1,
            room: 2,
            garage: 1,
            city: "Cidade Ocidental",
            address: "Recreio Mossoró",
            category: {
                connect: {
                    id: underConstructionCategory.id,
                }
            }
        }
    ]

    for(const item of underConstructionEnterprise){
        const enterprise = await prismaClient.enterprise.create({
            data: item
        })
        console.log(`created ${enterprise.name}`)
    }
}

const createReadyVenture = async () => {

    const readyVentureCategory = await prismaClient.category.create ({
        data: {
            name: "Imóvel Pronto",
            imageUrl: "https://picsum.photos/id/237/200/300",
            slug: "pronto"
        }
    })

    
    const readyVentureEnterprise = [
        {
            name: "Residencial Nimer",
            price: 190,
            imageUrls: [
                "https://i.ibb.co/bHZhnj9/04.jpg",
                "https://i.ibb.co/Y0h7QZ0/Whats-App-Image-2023-11-28-at-16-35-31-1.jpg",
                "https://i.ibb.co/vv4qyw1/01.jpg",
                "https://i.ibb.co/k5ZvHh4/Whats-App-Image-2023-11-28-at-16-35-29.jpg",
            ],
            description: "Conforto e elegância definem o Residencial NIMER, com apartamentos que oferecem acabamento de alta qualidade, localização privilegiada e fácil acesso a escolas e supermercados, é o lugar perfeito para sua família crescer com tranquilidade.",
            bathroom: 1,
            room: 2,
            garage: 1,
            city: "Valparaíso 1 - GO",
            address: "Esplanada 1",
            category: {
                connect: {
                    id: readyVentureCategory.id,
                }
            }
        }
    ]

    for(const item of readyVentureEnterprise){
        const enterprise = await prismaClient.enterprise.create({
            data: item
        })
        console.log(`created ${enterprise.name}`)
    }
}

const createTerrain = async () => {

    const terrainCategory = await prismaClient.category.create ({
        data: {
            name: "Terreno",
            imageUrl: "https://picsum.photos/id/237/200/300",
            slug: "terreno"
        }
    })

    
    const terrenoEnterprise = [
        {
            name: "Monte Sião",
            price: 87.500,
            imageUrls: [
                "https://i.ibb.co/JQnsqLh/Siao00.jpg",
                "https://i.ibb.co/SN8XWvY/Siao02.jpg",
                "https://i.ibb.co/jL2QWT0/Siao01.jpg",
                "https://i.ibb.co/mzsBT3T/montesiao05.jpg",
            ],
            description: "o Loteamento Monte Sião oferece lotes amplos com infraestrutura completa, próximo a escolas, supermercados e centros de saúde. Ideal para quem busca conveniência e um ambiente tranquilo para construir seu lar.",
            bathroom: 0,
            room: 0,
            garage: 0,
            city: "Luziânia - GO",
            address: "Norte Serrinha",
            category: {
                connect: {
                    id: terrainCategory.id,
                }
            }
        }
    ]

    for(const item of terrenoEnterprise){
        const enterprise = await prismaClient.enterprise.create({
            data: item
        })
        console.log(`created ${enterprise.name}`)
    }
}

const createAgioEnterprise = async () => {

    const agioCategory = await prismaClient.category.create ({
        data: {
            name: "Imóvel usado",
            imageUrl: "https://picsum.photos/id/237/200/300",
            slug: "usado"
        }
    })

    
    
    const agioEnterprise = [
        {
            name: "Residencial Monte Alegre",
            price: 195,
            imageUrls: [
                "https://i.ibb.co/g3vB7Sp/02.jpg",
                "https://i.ibb.co/b2jvn7M/01.jpg",
                "https://i.ibb.co/5hwJhr2/03.jpg",
                "https://i.ibb.co/RzpwqW4/04.jpg",
            ],
            description: "O residencial Monte Alegre é o novo empreendimento do Grupo Gois, este condomínio conta com playground para crianças, apartamentos com dois quartos e varanda. Além disso, se localiza na cidade de Valparaíso de Goiás.",
            bathroom: 1,
            room: 2,
            garage: 1,
            city: "Valparaíso 1 - GO",
            address: "Ipiranga",
            category: {
                connect: {
                    id: agioCategory.id,
                }
            }
        }
    ]

    for(const item of agioEnterprise){
        const enterprise = await prismaClient.enterprise.create({
            data: item
        })
        console.log(`created ${enterprise.name}`)
    }
}

const createTestimony = async () => {
    const testimony = [
        {
            name: "Paula Andrade",
            imageUrl: "https://i.ibb.co/QXVFhcn/depo02.jpg",
            testimony: "Só tenho a agradecer fui muito bem atendida e recomendo"
        },
        {
            name: "Fernanda Souto",
            imageUrl: "https://i.ibb.co/KbGwSZx/depo03.jpg",
            testimony: "Excelentes profissionais me acompanharam do início ao fim"
        },
        {
            name: "Pedro Marques",
            imageUrl: "https://i.ibb.co/Q88sm9R/depo01.jpg",
            testimony: "Consegui realizar meu sonho da casa própria e estou muito satisfeito com toda a equipe da Visão Imóveis"
        }
    ]

    for(const item of testimony){
        const newtestimony = await prismaClient.testimony.create({
            data: item
        })
        console.log(`created ${newtestimony.name}`)
    }
}




const main = async () => {  
  
    await createUnderConstruction();
    await createReadyVenture();
    await createTerrain();
    await createAgioEnterprise();
    await createTestimony();
 
  };
  
  main()
    .then(() => {
      console.log("Seed do banco de dados realizado com sucesso!");
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    })
    .finally(async () => {
      await prismaClient.$disconnect();
    });