import { Request, Response } from 'express'
import { GameModel } from '../models/game'

export async function getGame(req: Request, res: Response) {
    console.log('Request to get game by id', req.params.id)
  
    let getGame = await GameModel.find({})
    
    if (!getGame) {
      res.status(404).send()
    } else {
      res.json(getGame)
    }
  }
  export async function getGameById(req: Request, res: Response) {
    console.log('Request to get game by id', req.params.id)
  
    let getGame = await GameModel.findById(req.params.id)
    
    if (!getGame) {
      res.status(404).send()
    } else {
      res.json(getGame)
    }
  }

  export async function putGame(req: Request, res: Response) {
    console.log('Request to put game by id', req.params.id)
  
    let gameToPut = await GameModel.findById(req.params.id)
    
    if (!gameToPut) {
      res.status(404).send()
    } else {
        gameToPut.title = req.body.title
        let putGame = await gameToPut.save()
      res.json(putGame)
    }
  }

export async function createGame(req: Request, res: Response) {
  console.log('Request to add game :', req.body)

  let gameToCreate = new GameModel(req.body)
  let createdGame = await gameToCreate.save()

  res.json(createdGame)
}
export async function deleteGame(req: Request, res: Response) {
    console.log('Request to delete game by id', req.params.id)
  
    let deletedGame = await GameModel.findByIdAndRemove(req.params.id)
  
    if (!deletedGame) {
      res.status(404).send()
    } else {
      res.json(deletedGame)
    }
  }