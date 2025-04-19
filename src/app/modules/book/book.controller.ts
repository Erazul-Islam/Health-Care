import { Request, Response } from "express"
import { bookServices } from "./book.service"

const createBookController = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const result = await bookServices.addNewBookService(data)

        res.status(201).json({
            success: true,
            status: 201,
            message: "Book is created successfully",
            data: result
        })
    }
    catch (err) {
        console.log(err)
    }
}

const getAllBooks = async (req: Request, res: Response) => {
    try {
        const result = await bookServices.getAllBooks()

        res.status(201).json({
            success: true,
            status: 201,
            message: "Books retrived successfully",
            data: result
        })
    }
    catch (err) {
        console.log(err)
    }
}
const getSingleBook = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await bookServices.getSingleBooks(id)

        res.status(201).json({
            success: true,
            status: 201,
            message: "Book retrived successfully",
            data: result
        })
    }
    catch (err) {
        console.log(err)
    }
}
const getUpdatedBook = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await bookServices.getUpdatedBook(id, req.body)

        res.status(201).json({
            success: true,
            status: 201,
            message: "Book updated successfully",
            data: result
        })
    }
    catch (err) {
        console.log(err)
    }
}

const deleteBook = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        await bookServices.deleteBook(id)

        res.status(201).json({
            success: true,
            status: 201,
            message: "Book Deleted successfully",
        })
    }
    catch (err) {
        console.log(err)
    }
}

export const bookController = {
    createBookController,
    getAllBooks,
    getSingleBook,
    getUpdatedBook,
    deleteBook
}