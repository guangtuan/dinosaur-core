import {ObjectId} from "mongodb";

export type Series = {
    name: string,
    imdb: string,
    douban: string,
    cover: string
}

export type SeriesPo = {
    _id: ObjectId
} & Series

export type Episode = {
    seriesId: ObjectId,
    season: number,
    no: number
}

export  type EpisodePo = {
    _id: ObjectId
} & Episode

export type TvToFile = {
    _id: ObjectId,
    episodeId: ObjectId,
    fullPath: string,
    spaceId: ObjectId
}
