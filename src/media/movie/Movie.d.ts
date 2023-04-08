import { ObjectId } from 'mongodb'
import { ReFileVo } from '../../resources/ReResource'
import { Raiting } from '../rating/Rating'

export type Movie = {
    name: String
    rating: Raiting
    pic: String
}

export type MovieStore = Movie & {
    id: ObjectId
}

export type MovieDisplay = Movie & {
    media: ReFileVo
}
