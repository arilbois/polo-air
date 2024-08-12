const { PrismaClient } = require("@prisma/client");
const bctypt = require("bcrypt")

const prisma = new PrismaClient()

async function main() {
    const password = bctypt.hashSync("admin123", 10)

    const userSeed = await prisma.user.create({
        data: {
            email: "admin@main.com",
            name: "Admin",
            role: "ADMIN",
            password
        }
    })

    console.log({ userSeed })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })