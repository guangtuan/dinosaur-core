import { ObjectId } from 'mongodb'
import { ReFileVo } from '../../resources/ReResource'
import { Raiting } from '../rating/Rating'

export type Movie = {
    name: String
    rating: Raiting
    pic: String
}

export type MoviePo = Movie & {
    id: ObjectId
}

export type MovieVo = Movie & {
    media: ReFileVo
}

export type MovieToFile = {
    _id: ObjectId
    moveId: ObjectId
    fullPath: string
    spaceId: ObjectId
}
