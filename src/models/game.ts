import {Schema, model} from 'mongoose'
import { User } from './user'

export interface Game {
    title: string,
    addedAt: Date,
    infos?: {
      release: Date,
      pegi: number,
      metacritic: number,
      genres: []
    },
    addedBy?: User

}

export const gameSchema = new Schema<Game>({
    title: { type: String, required: true },
    addedAt: { type: Date, default: () => new Date() },
    infos: {
      release: { type: Date},
      pegi: { type: Number},
      metacritic: { type: Number},
      genres: {type: []}
    },
    addedBy: {type: Schema.Types.ObjectId, ref: 'User'}
  })

export const GameModel = model<Game>('Game', gameSchema)