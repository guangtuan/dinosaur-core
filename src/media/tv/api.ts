import { Request, Response } from 'express'
import { ApiCollection } from '../../framework/api'
import { all, create } from './TvService'
import { Series, SeriesDisplay } from './Tv'

export default {
    base: 'series',
    apis: [
        {
            method: 'get',
            url: '',
            handler: async (
                req: Request,
                resp: Response,
            ): Promise<Array<SeriesDisplay>> => {
                return await all()
            },
        },
        {
            method: 'post',
            url: '',
            handler: async (req: Request, resp: Response): Promise<boolean> => {
                try {
                    const body = req.body as Series
                    await create(body)
                    return true
                } catch (e) {
                    return false
                }
            },
        },
    ],
} as ApiCollection
