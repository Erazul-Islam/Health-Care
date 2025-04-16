
import { PrismaClient, UserRole } from "../../../generated/prisma"

const prisma = new PrismaClient()

const createAdmin = async (data: any) => {
    const userData = { email: data.admin.email, password: data.password, role: UserRole.ADMIN }
    const result = await prisma.$transaction(async(tansactionClient : any) => {
        const createdUserData = await tansactionClient.user.create({
            data : userData
        })

        const createdAdminData = await tansactionClient.admin.create({
            data : data.admin
        })
        return {createdAdminData,createdUserData}
    })
    return result
}

export const userService = {
    createAdmin
}