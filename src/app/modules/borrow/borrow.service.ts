import { BorrowRecord } from "../../../generated/prisma";
import { prisma } from "../../shared/prisma";

const borrowBook = async (payload:BorrowRecord) => {
    const result = await prisma.borrowRecord.create({
        data : payload
    })

    return result
}

export const borrowService = {
    borrowBook
}