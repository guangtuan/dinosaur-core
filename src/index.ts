import express from 'express'
import * as env from './framework/env'
import * as db from './framework/db'
import urlJoin from './url'
import httpServer from './framework/httpServer'

import spaceApi from './space/api'
import spaceDetailApi from './resources/api'

import startMediaServer from './media/startServer'

const apiList = [spaceApi, spaceDetailApi]

const appInit = async () => {
    const app = httpServer.createApp()

    apiList.forEach(async ({ base, apis }): Promise<void> => {
        apis.forEach(async (api) => {
            const actualUrl = urlJoin(['api', base, api.url])
            console.log(`actual url is ${actualUrl}, method is ${api.method}`)
            app[api.method](
                '/' + actualUrl,
                async (req: express.Request, res: express.Response) => {
                    console.log(`api ${JSON.stringify(req.body)}`)
                    const result = await api.handler(req, res)
                    res.status(200)
                    res.json(result)
                    res.end()
                },
            )
        })
    })

    app.listen(env.webPort, () => {
        console.log('app listen on', env.webPort)
    })
}

;(async () => {
    try {
        await db.init()
        await appInit()
        startMediaServer()
    } catch (e) {
        console.error(e)
        await db.close()
    }
})()
