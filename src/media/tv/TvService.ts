import * as db from '../../framework/db'
import { Series, SeriesDisplay, SeriesStore } from './Tv'

const movies = () => db.collection('series')

export const create = async (movie: Series): Promise<SeriesDisplay> => {
    const result = await movies().insertOne(movie)
    const insertedId = result.insertedId
    return {
        id: insertedId.toString(),
        ...movie,
    }
}

export const all = async (): Promise<Array<SeriesDisplay>> => {
    const pos = (await movies()
        .find({})
        .toArray()) as unknown as Array<SeriesStore>
    return pos.map((po: SeriesStore) => ({
        ...po,
        id: po._id.toString(),
    }))
}
