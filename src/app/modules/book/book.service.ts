import { Book } from "../../../generated/prisma";
import { prisma } from "../../shared/prisma";

const addNewBookService = async (payload: Book) => {
    const result = await prisma.book.create({
        data: payload
    })

    return result
}

const getAllBooks = async () => {
    const result = await prisma.book.findMany()

    return result
}

const getSingleBooks = async (id: string) => {
    const result = await prisma.book.findUnique({
        where: {
            bookId: id
        }
    })

    return result
}

const getUpdatedBook = async (id: string, payload: any) => {
    const desiredBook = await prisma.book.findUnique({
        where: {
            bookId: id
        }
    })

    if (!desiredBook) {
        throw new Error("Book id does not found")
    }

    const updatedBook = await prisma.book.update({
        where: {
            bookId: id,
        },
        data: payload
    })

    return updatedBook
}



export const bookServices = {
    addNewBookService,
    getAllBooks,
    getSingleBooks,
    getUpdatedBook
}