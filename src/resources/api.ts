import { Request, Response } from 'express'
import { ApiCollection } from '../framework/api'
import { load } from './ResourceService'
import { ReResource } from './ReResource'

export default {
    base: 'resources',
    apis: [
        {
            method: 'get',
            url: '',
            handler: async (
                req: Request,
                res: Response,
            ): Promise<ReResource> => {
                const on = req.query['on'] as string
                const space = req.query['space'] as string
                return load({ on, space })
            },
        },
    ],
} as ApiCollection
