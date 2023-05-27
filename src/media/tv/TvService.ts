import * as db from '../../framework/db'
import { Series, SeriesDisplay, SeriesStore } from './Tv'

const movies = () => db.collection('series')

export const create = async (series: Series): Promise<SeriesDisplay> => {
    const result = await movies().insertOne(series)
    const insertedId = result.insertedId
    return {
        id: insertedId.toString(),
        ...series,
    }
}

export const all = async (): Promise<Array<SeriesDisplay>> => {
    const pos = (await movies()
        .find({})
        .toArray()) as unknown as Array<SeriesStore>
    return pos.map((po: SeriesStore) => ({
        name: po.name,
        cover: po.cover,
        id: po._id.toString(),
    }))
}
