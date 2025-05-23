import { Request, Response } from "express";
import { memberService } from "./member.service";

const createMemberController = async (req: Request, res: Response) => {

    try {
        const data = req.body
        const result = await memberService.createMember(data)

        res.status(201).json({
            success: true,
            status: 201,
            message: " Member created successfully",
            data: result
        })
    }

    catch (err) {
        console.log(err)
    }

}

const getAllMembers = async (req: Request, res: Response) => {

    try {
        const result = await memberService.getAllMembers()

        res.status(201).json({
            success: true,
            status: 201,
            message: " Member retrived successfully",
            data: result
        })
    }

    catch (err) {
        console.log(err)
    }

}
const getSingleMember = async (req: Request, res: Response) => {

    try {

        const id = req.params.id
        const result = await memberService.getSingleMember(id)

        res.status(201).json({
            success: true,
            status: 201,
            message: " Member retrived successfully",
            data: result
        })
    }

    catch (err) {
        console.log(err)
    }

}
const updatedMember = async (req: Request, res: Response) => {

    try {

        const id = req.params.id
        const data = req.body
        const result = await memberService.getUpdatedMember(id, data)

        res.status(201).json({
            success: true,
            status: 201,
            message: " Member  updated  successfully",
            data: result
        })
    }

    catch (err) {
        console.log(err)
    }

}

const deleteMember = async (req: Request, res: Response) => {

    try {

        const id = req.params.id
        await memberService.deleteMember(id)

        res.status(201).json({
            success: true,
            status: 201,
            message: " Member deleted successfully",
        })
    }

    catch (err) {
        console.log(err)
    }

}

export const memberController = {
    createMemberController,
    getAllMembers,
    getSingleMember,
    updatedMember,
    deleteMember
}