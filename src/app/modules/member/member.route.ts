import { Router } from "express";
import { memberController } from "./member.controller";

const router = Router()

router.post('/', memberController.createMemberController)
router.get('/', memberController.getAllMembers)
router.get('/:id', memberController.getSingleMember)
router.put('/:id', memberController.updatedMember)

export const memberRouter = router