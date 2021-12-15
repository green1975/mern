import { Request, Response } from 'express'
import { UserModel } from '../models/user'

export async function getUser (req: Request, res: Response) {
    console.log('Request to get user by id', req.params.id)
  
    let getUser = await UserModel.find({})
    
    if (!getUser) {
      res.status(404).send()
    } else {
      res.json(getUser)
    }
  }
export async function getUserById(req: Request, res: Response) {
    console.log('Request to get user by id', req.params.id)
  
    let getUser = await UserModel.findById(req.params.id)
    
    if (!getUser) {
      res.status(404).send()
    } else {
      res.json(getUser)
    }
  }

  export async function putUser(req: Request, res: Response) {
    console.log('Request to put user by id', req.params.id)
  
    const id = req.params.id;
    let userToPut = await UserModel.findById(req.params.id);
   
    if (!userToPut) {
      res.status(404).send()
    } else { 
        let update = {
        ...userToPut.toObject(), ...req.body
    }
        let putUser = await UserModel.updateOne({_id: req.params.id}, update)
        console.log('fin')
      res.json(update)
    }
  }

export async function deleteUser(req: Request, res: Response) {
    console.log('Request to delete user by id', req.params.id)
  
    let deletedUser = await UserModel.findByIdAndRemove(req.params.id)
  
    if (!deletedUser) {
      res.status(404).send()
    } else {
      res.json(deletedUser)
    }
  }
export async function createUser(req: Request, res: Response) {
  console.log('Request to add user :', req.body)

  let userToCreate = new UserModel(req.body)
  let createdUser = await userToCreate.save()

  res.json(createdUser)
}

