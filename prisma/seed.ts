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
                "https://picsum.photos/id/237/200/300",
                "https://picsum.photos/id/237/200/300",
                "https://picsum.photos/id/237/200/300",
                "https://picsum.photos/id/237/200/300",
            ],
            description: "lorem ipsum dolor sit amet",
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
            name: "Residencial Green Park 5 Club",
            price: 208,
            imageUrls: [
                "https://i.ibb.co/FWkywgy/Green02.jpg",
                "https://i.ibb.co/ZXP1KYc/Green05.jpg",
                "https://i.ibb.co/TL2TjmZ/Green09.jpg",
                "https://i.ibb.co/9swtf1S/Green01.jpg",
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
                "https://picsum.photos/id/237/200/300",
                "https://picsum.photos/id/237/200/300",
                "https://picsum.photos/id/237/200/300",
                "https://picsum.photos/id/237/200/300",
            ],
            description: "lorem ipsum dolor sit amet",
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
                "https://picsum.photos/id/237/200/300",
                "https://picsum.photos/id/237/200/300",
                "https://picsum.photos/id/237/200/300",
                "https://picsum.photos/id/237/200/300",
            ],
            description: "lorem ipsum dolor sit amet",
            bathroom: 0,
            room: 0,
            garage: 0,
            city: "Luziânia - GO",
            address: "Esplanada 1",
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
                "https://picsum.photos/id/237/200/300",
                "https://picsum.photos/id/237/200/300",
                "https://picsum.photos/id/237/200/300",
                "https://picsum.photos/id/237/200/300",
            ],
            description: "lorem ipsum dolor sit amet",
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