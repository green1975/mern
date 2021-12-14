import { Router } from 'express'
import { createGame, getGame, putGame, deleteGame, getGameById } from '../controllers/game'
import { createUser, getUser, putUser, deleteUser, getUserById } from '../controllers/user'

export const router = Router()
//Game
router.post('/games', createGame)
router.get('/games', getGame)
router.get('/games/:id', getGameById)
router.put('/games/:id', putGame)
router.delete('/games/:id', deleteGame)

//User
router.post('/users', createUser)
router.get('/users', getUser)
router.get('/users/:id', getUserById)
router.put('/users/:id', putUser)
router.delete('/users/:id', deleteUser)