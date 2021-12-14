import { Request, Response } from 'express'
import { UserModel } from '../models/user'

export async function createUser(req: Request, res: Response) {
  console.log('Request to add user :', req.body)

  let userToCreate = new UserModel(req.body)
  let createdUser = await userToCreate.save()

  res.json(createdUser)
}