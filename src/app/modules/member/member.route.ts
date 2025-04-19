import { Router } from "express";
import { memberController } from "./member.controller";

const router = Router()

router.post('/', memberController.createMemberController)

export const memberRouter = router