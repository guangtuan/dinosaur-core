import { ObjectId } from 'mongodb'

export type Series = {
    name: string
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

export type SeriesDisplay = Series & {
    id: string
}
