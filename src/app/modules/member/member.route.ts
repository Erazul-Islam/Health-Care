import { Router } from "express";
import { memberController } from "./member.controller";

const router = Router()

router.post('/', memberController.createMemberController)
router.get('/', memberController.getAllMembers)

export const memberRouter = router