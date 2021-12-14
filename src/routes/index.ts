import { Router } from 'express'
import { createGame } from '../controllers/game'
import { createUser } from '../controllers/user'

export const router = Router()
//Game
router.post('/games', createGame)

//User
router.post('/users', createUser)