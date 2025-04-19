import { Request, Response } from "express"
import { bookServices } from "./book.service"

const createBookController = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const result = await bookServices.addNewBookService(data)

        res.status(201).json({
            success : true,
            status : 201,
            message : "Book is created successfully",
            data : result
        })
    }
    catch (err) {
        console.log(err)
    }
}

export const bookController = {
    createBookController
}