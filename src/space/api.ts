import { Request, Response } from 'express'
import { ApiCollection } from '../framework/api'
import { SpaceVo, SpaceCreation } from './Space'
import { all, save, update } from './spaceService'

export default {
    base: 'space',
    apis: [
        {
            method: 'get',
            url: '',
            handler: async (
                req: Request,
                res: Response,
            ): Promise<Array<SpaceVo>> => {
                return await all()
            },
        },
        {
            method: 'post',
            url: '',
            handler: async (req: Request, res: Response): Promise<SpaceVo> => {
                const body = req.body as SpaceCreation
                return await save(body)
            },
        },
        {
            method: 'put',
            url: '/:id',
            handler: async (req: Request, res: Response): Promise<SpaceVo> => {
                console.log(`service ${JSON.stringify(req.body)}`)
                const body = req.body as SpaceCreation
                const id = req.params.id
                return await update(id, body)
            },
        },
    ],
} as ApiCollection
