import { Request, Response } from 'express'
import {Condition, Group} from 'mongoose'
import { GameModel, Game } from '../models/game'

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
  export async function updateInfoGame(req: Request, res: Response) {
    console.log('Request to updateInfoGame by id', req.params.id)
  
    let updateInfoGame = await GameModel.findById(req.params.id)

    if (!updateInfoGame) {
      res.status(404).send()
    } else {
        let update = {
          ...updateInfoGame.toObject().infos,
          ...req.body
        }
      updateInfoGame['infos'] = update
        let putGame = await GameModel.updateOne({_id : req.params.id}, updateInfoGame.toObject())
      res.json(update)
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

export async function latestGame(req:Request, res: Response) {
  console.log('Request the latest value ');
  let latestGame = await GameModel.findOne({},{}, {sort:{'addedAt': -1} })
  if (!latestGame) {
    res.status(404).send()
  } else {
    res.json(latestGame)
  }
}

export async function searchGame(req:Request, res: Response) {
  console.log('Request the search value ');
  let name = req.query.name;
  
  let searchGame = await GameModel.find({title: new RegExp(name, 'i')}).limit(10)
  if (!searchGame) {
    res.status(404).send()
  } else {
    res.json(searchGame)
  }
}
export async function paginateGame(req:Request, res: Response) {
  console.log('Request the paginate value ');
  let page = parseInt(req.query.page) || 0; //for next page pass 1 here
  let limit = parseInt(req.query.limit) || 3;
 
  let paginateGame = await GameModel.find().sort('title').limit(limit).skip(limit*page)
  if (!paginateGame) {
    res.status(404).send()
  } else {
    res.json(paginateGame)
  }
}
export async function userGame(req:Request, res: Response) {
  console.log('Request the user game value ');
  let user: string = req.params.id
  let userGame = await GameModel.find({addedBy: user} as Condition<Game>)
  if (!userGame) {
    res.status(404).send()
  } else {
    res.json(userGame)
  }
}

export async function statsGame(req:Request, res: Response) {
  console.log('Request the user game value ');
  const aggregatorOpts: Group = 
    {
      $group: {
          _id: "$addedBy",
          count: { $sum: 1 },
          moyenne: {$avg: "$infos.metacritic"}
      }
    }
  
 let statsGame = await GameModel.aggregate([aggregatorOpts])
  if (!statsGame) {
    res.status(404).send()
  } else {
    res.json(statsGame)
  }
}
