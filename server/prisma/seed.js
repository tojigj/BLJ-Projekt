const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
//Add data here to seed the database
const main = async () => {
    await prisma.stockwerke.deleteMany({});
    await prisma.stockwerke.createMany({
        data: [
            {
                stockwerkID: 1,
                stockwerkName: '1'
            },
            {                
                stockwerkID: 2,
                stockwerkName: '2'
            },
            {
                stockwerkID: 3,
                stockwerkName: '3'
            }
            
        ]
    });
    await prisma.standorte.deleteMany({})
    await prisma.standorte.createMany({
        data: [
            {
                standortName: 'Röslimatt',
                standortID: 1
            },
            {
                standortName: 'Fluhmatt',
                standortID: 2
            }
        ]
    })
};
    main()
        .catch((error) => {
            console.error(error);
            process.exit(1);
        })
        .finally(async () => {
            await prisma.$disconnect();
        });
