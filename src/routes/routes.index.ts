import { Router } from "express";

import teamsRouter from './teams.routes'

import playersRouter from './players.routes'

const router = Router()

router.use('/teams', teamsRouter)

router.use('/players', playersRouter)

export default router