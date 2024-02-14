import { Router } from "express";

import { getAllTeamsController } from '../controllers/teams.controllers'

const router = Router()

router.get('/', getAllTeamsController)

export default router