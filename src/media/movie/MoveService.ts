// curd service for movie collection

import * as db from '../../framework/db'
import { MoviePo, MovieVo } from './Movie'
import { all as allMediaToFile } from '../mediaToFile/MediaToFileService'

const movies = () => db.collection('movie')

export const create = async (movie: MoviePo): Promise<MoviePo> => {
    const result = await movies().insertOne(movie)
    const insertedId = result.insertedId
    return {
        id: insertedId,
        ...movie,
    }
}

export const all = async (): Promise<Array<MovieVo>> => {
    const pos = (await movies().find({}).toArray()) as unknown as Array<MoviePo>
    const indexByMovieId = await allMediaToFile()
    return pos.map((po: MoviePo) => ({
        name: po.name,
        rating: po.rating,
        pic: po.pic,
        media: {
            tag: 'file',
            osFile: {
                name: indexByMovieId[po.id.toString()].fullPath,
                fullpath: indexByMovieId[po.id.toString()].fullPath,
                size: {
                    origin: 0,
                    readable: '0',
                },
            },
            remote: '',
        },
    }))
}
