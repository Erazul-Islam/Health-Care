import { Request, Response } from "express"
import { adminService } from "./admin.service"
import pick from "../pick"
import { adminFiltarableFields } from "./admin.constant"

const getAdminFromDB = async (req: Request, res: Response) => {
    try {
        const filters = pick(req.query,adminFiltarableFields)
        const options = ['page','limit']
        const result = await adminService.getAdmin(filters,options)
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