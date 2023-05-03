import { Request, Response } from 'express'
import { ApiCollection } from '../framework/api'
import { uninoCreate } from './mediaService'
import { MediaPost } from './media'

export default {
    base: 'media',
    apis: [
        {
            method: 'post',
            url: '',
            handler: async (req: Request, resp: Response): Promise<boolean> => {
                const body = req.body() as MediaPost
                return uninoCreate(body)
            },
        },
    ],
} as ApiCollection
