import { Router } from "express";

import { getAllTeamsController, getPlayersByTeamIdController } from '../controllers/teams.controllers'

const router = Router()

router.get('/', getAllTeamsController)

router.get('/:teamId/players', getPlayersByTeamIdController)

export default router