import { Router } from "express";

import { getAllPlayersController } from '../controllers/players.controllers'

const router = Router()

router.get('/', getAllPlayersController)

export default router