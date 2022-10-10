import { Request, Response } from 'express'
import { ApiCollection } from '../framework/api'
import { ReSpace } from './Space'
import { all, save } from './spaceService'

export default {
    base: 'space',
    apis: [
        {
            method: 'get',
            url: '',
            handler: async (
                req: Request,
                res: Response,
            ): Promise<Array<ReSpace>> => {
                return await all()
            },
        },
        {
            method: 'post',
            url: '',
            handler: async (req: Request, res: Response): Promise<ReSpace> => {
                const body = req.body
                return await save(body)
            },
        },
    ],
} as ApiCollection
