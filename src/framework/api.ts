import { Request, Response } from 'express'
import httpMethod from './httpMethod'

export type Api = {
    method: httpMethod
    url: string
    handler: (req: Request, resp: Response) => Promise<any>
}

export type ApiCollection = {
    base: string
    apis: Array<Api>
}
