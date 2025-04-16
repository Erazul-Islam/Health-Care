import { PrismaClient } from "../../../generated/prisma"

const prisma = new PrismaClient()

const getAdmin = async (params: any) => {
    console.log({ params })
    const result = prisma.admin.findMany({
        where: {
            OR: [{
                name: {
                    contains: params.searchTerm,
                    mode: "insensitive"
                }
            }, {
                email : {
                    contains : params.searchTerm,
                    mode : "insensitive"
                }
            }]
        }
    })

    return result
}

export const adminService = {
    getAdmin
} 