import { Request, Response } from 'express'
import { GameModel } from '../models/game'

export async function createGame(req: Request, res: Response) {
  console.log('Request to add game :', req.body)

  let gameToCreate = new GameModel(req.body)
  let createdGame = await gameToCreate.save()

  res.json(createdGame)
}