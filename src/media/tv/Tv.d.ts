import { ObjectId } from 'mongodb'
import { Raiting } from '../rating/Rating'

export type Series = {
    name: string
    rating: Raiting
    cover: string
}

export type SeriesPo = {
    _id: ObjectId
} & Series

export type Episode = {
    seriesId: ObjectId
    season: number
    no: number
}

export type EpisodePo = {
    _id: ObjectId
} & Episode
