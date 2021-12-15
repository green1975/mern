import { Router } from 'express'
import { createGame, getGame, putGame, deleteGame, getGameById, latestGame,searchGame,paginateGame, userGame, statsGame, updateInfoGame } from '../controllers/game'
import { createUser, getUser, putUser, deleteUser, getUserById } from '../controllers/user'

export const router = Router()
//Game
router.post('/games', createGame)
router.get('/games', getGame)
router.get('/games/last', latestGame)
router.get('/games/search', searchGame)
router.get('/games/paginate', paginateGame)
router.get('/games/stats', statsGame)
router.get('/games/user/:id', userGame)
router.get('/games/:id', getGameById)
router.put('/games/:id', putGame)
router.delete('/games/:id', deleteGame)
router.put('/games/infos/:id', updateInfoGame)

//User
router.post('/users', createUser)
router.get('/users', getUser)
router.get('/users/:id', getUserById)
router.put('/users/:id', putUser)
router.delete('/users/:id', deleteUser)