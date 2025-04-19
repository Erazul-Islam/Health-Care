import { Book } from "../../../generated/prisma";
import { prisma } from "../../shared/prisma";

const addNewBookService = async (payload : Book) => {
    const result = await prisma.book.create({
        data : payload
    })

    return result
}

const getAllBooks = async () => {
    const result = await prisma.book.findMany()

    return result
}

const getSingleBooks = async (id:string) => {
    const result = await prisma.book.findUnique({
        where : {
            bookId:id
        }
    })

    return result
}

export const bookServices = {
    addNewBookService,
    getAllBooks,
    getSingleBooks
}