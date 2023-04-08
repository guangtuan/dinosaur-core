import { ObjectId } from 'mongodb'
import { Raiting } from '../rating/Rating'

export type Series = {
    name: string
    rating: Raiting
    cover: string
}

export type SeriesStore = {
    _id: ObjectId
} & Series

export type Tv = {
    seriesId: ObjectId
    season: number
    no: number
}

export type TvStore = {
    _id: ObjectId
} & Tv
