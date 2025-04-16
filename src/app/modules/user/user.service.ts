import * as bcrypt from 'bcrypt'
import { PrismaClient, UserRole } from "../../../generated/prisma"

const prisma = new PrismaClient()

const createAdmin = async (data: any) => {

    const hashedPassword = await bcrypt.hash(data.password,10)

    const userData = { email: data.admin.email, password: hashedPassword, role: UserRole.ADMIN }
    const result = await prisma.$transaction(async (tansactionClient: any) => {
        await tansactionClient.user.create({
            data: userData
        })

        const createdAdminData = await tansactionClient.admin.create({
            data: data.admin
        })
        return createdAdminData
    })
    return result
}

export const userService = {
    createAdmin
}