import {Schema, model} from 'mongoose'

export interface User {
    firstname: string,
    lastname: string,
    mail: string
}

export const userSchema = new Schema<User>({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    mail: {type: String, required: true}
})

export const UserModel = model<User>('User', userSchema)