import { Prisma, PrismaClient } from "../../../generated/prisma"

const prisma = new PrismaClient()

const getAdmin = async (params: any) => {

    const { searchTerm, ...filterData } = params

    const addConditions: Prisma.AdminWhereInput[] = []

    if (params.searchTerm) {
        const adminSearchableField = ['name', 'email']
        addConditions.push({
            OR: adminSearchableField.map(field => ({
                [field]: {
                    contains: params.searchTerm,
                    mode: "insensitive"
                }
            }))
        })
    }

    if (Object.keys.length > 0) {
        addConditions.push({
            AND : Object.keys(filterData).map(key => ({
                [key] : {
                    equals : filterData[key]
                }
            }))
        })
    }



    const whereCondtions: Prisma.AdminWhereInput = { AND: addConditions }

    const result = prisma.admin.findMany({
        where: whereCondtions
    })

    return result
}

export const adminService = {
    getAdmin
} 