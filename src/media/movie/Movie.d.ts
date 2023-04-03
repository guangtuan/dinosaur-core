import { ObjectId } from 'mongodb'
import { ReFileVo } from '../../resources/ReResource'
import { Raiting } from '../rating/Rating'

type Movie = {
    name: String
    rating: Raiting
    pic: String
}

type MoviePo = Movie & {
    id: ObjectId
}

type MovieVo = Movie & {
    media: ReFileVo
}

type MovieToFile = {
    _id: ObjectId
    moveId: ObjectId
    fullPath: string
    spaceId: ObjectId
}
