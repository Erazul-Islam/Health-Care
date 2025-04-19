import { Member } from "../../../generated/prisma"
import { prisma } from "../../shared/prisma"

const createMember = async (payload: Member) => {
    const result = await prisma.member.create({
        data: payload
    })

    return result
}

const getAllMembers = async () => {
    const result = await prisma.member.findMany()

    return result
}

const getSingleMember = async (id :string)  => {
    const result = await prisma.member.findUnique({
        where : {
            memberId : id
        }
    })

    return result
}

const getUpdatedMember = async (id :string,payload : any)  => {
    const result = await prisma.member.update({
        where : {
            memberId : id
        },
        data : payload
    })

    return result
}
 
export const memberService = {
    createMember,
    getAllMembers,
    getSingleMember,
    getUpdatedMember
}