import { Book } from "../../../generated/prisma";
import { prisma } from "../../shared/prisma";

const addNewBookService = async (payload : Book) => {
    const result = await prisma.book.create({
        data : payload
    })

    return result
}

export const bookServices = {
    addNewBookService
}