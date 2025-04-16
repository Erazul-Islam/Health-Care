import { Request, Response } from "express"
import { adminService } from "./admin.service"


const getAdminFromDB = async (req: Request, res: Response) => {

    


    try {
        const result = await adminService.getAdmin(req.query)
        res.status(200).json({
            success: true,
            message: "admin data retrived suucessfully",
            data: result
        })
    }
    catch (err) {
        res.status(500).json({
            message : "Something went wrong"
        })
    }
}

export const adminController = {
    getAdminFromDB
}