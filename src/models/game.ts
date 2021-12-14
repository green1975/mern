import {Schema, model} from 'mongoose'
import { User } from './user'

export interface Game {
    title: string,
    addedAt: Date,
    addedBy?: User
}

export const gameSchema = new Schema<Game>({
    title: { type: String, required: true },
    addedAt: { type: Date, default: () => new Date() },
    addedBy: Schema.Types.ObjectId,
  })

export const GameModel = model<Game>('Game', gameSchema)