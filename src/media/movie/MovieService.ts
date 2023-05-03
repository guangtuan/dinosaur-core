// curd service for movie collection

import * as db from '../../framework/db'
import { MovieStore, MovieDisplay, Movie } from './Movie'

const movies = () => db.collection('movie')

export const create = async (movie: Movie): Promise<MovieStore> => {
    const result = await movies().insertOne(movie)
    const insertedId = result.insertedId
    return {
        id: insertedId,
        ...movie,
    }
}

export const all = async (): Promise<Array<MovieDisplay>> => {
    const pos = (await movies()
        .find({})
        .toArray()) as unknown as Array<MovieStore>
    return pos.map((po: MovieStore) => ({
        name: po.name,
        cover: po.cover,
        id: po.id.toString(),
    }))
}
