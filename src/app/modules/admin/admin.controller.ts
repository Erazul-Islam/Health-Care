import { Request, Response } from "express"
import { adminService } from "./admin.service"
import pick from "../pick"




const getAdminFromDB = async (req: Request, res: Response) => {
    try {
        
        const result = await adminService.getAdmin(pick(req.query,['name','email','searchTerm']))
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