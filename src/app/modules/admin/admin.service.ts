import { Prisma, PrismaClient } from "../../../generated/prisma"
import { adminSearchableField } from "./admin.constant"

const prisma = new PrismaClient()

const getAdmin = async (params: any, options: any) => {
    const { limit, page } = options
    const { searchTerm, ...filterData } = params

    const addConditions: Prisma.AdminWhereInput[] = []

    if (params.searchTerm) {

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
            AND: Object.keys(filterData).map(key => ({
                [key]: {
                    equals: filterData[key]
                }
            }))
        })
    }



    const whereCondtions: Prisma.AdminWhereInput = { AND: addConditions }

    const result = prisma.admin.findMany({
        where: whereCondtions,
        skip : Number(page - 1) * limit,
        take : Number(limit),
        orderBy : {
            createdAt : 'asc'
        }
    })

    return result
}

export const adminService = {
    getAdmin
} 