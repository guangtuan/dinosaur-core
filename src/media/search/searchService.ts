import { Request, Response } from 'express'
import { ApiCollection } from '../../framework/api'
import { SearchResult, SearchRequest } from './searcher'
import { impl as search } from './theMovieDb'

export default {
    base: 'search',
    apis: [
        {
            method: 'post',
            url: '',
            handler: async (
                req: Request,
                res: Response,
            ): Promise<Array<SearchResult>> => {
                const searchRequest = req.body as SearchRequest
                return await search(searchRequest)
            },
        },
    ],
} as ApiCollection
