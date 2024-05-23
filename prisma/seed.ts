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




const main = async () => {  
  
    await createUnderConstruction();
    await createReadyVenture();
    await createTerrain();
    await createAgioEnterprise();
 
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