import { ObjectId } from 'mongodb'

export type Movie = {
    name: String
    cover: String
}

export type MovieStore = Movie & {
    id: ObjectId
}

export type MovieDisplay = Movie & {
    id: string
}
