import { Request, Response } from "express";
import { borrowService } from "./borrow.service";

const borrowBookController = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const result = await borrowService.borrowBook(data)

        res.status(201).json({
            success: true,
            message: "Book borrowed successfully ",
            result: result
        })
    }
    catch (err) {
        console.log(err)
    }
}

export const borrowController = {
    borrowBookController
}