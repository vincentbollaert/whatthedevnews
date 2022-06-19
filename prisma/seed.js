const { PrismaClient } = require('@prisma/client')
const { post } = require('./data')

const prisma = new PrismaClient()

const load = async () => {
  try {
    await prisma.post.deleteMany()
    console.log('Posts are removed')

    // ensure the ids still match in case you reference another table
    await prisma.$queryRaw`ALTER TABLE Post AUTO_INCREMENT = 1`

    await prisma.post.createMany({ data: post })
    console.log('Posts are created')
  } catch (error) {
    console.log(error)
  } finally {
    await prisma.$disconnect()
  }
}

load()
