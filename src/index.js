const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const urlJoin = require('./url')
const db = require('./framework/db')
const { webPort } = require('./framework/env')

const resourceApi = require('./resource/api')
const spaceApi = require('./space/api')

const createApp = () => {
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cors())
    return app
}

const appInit = async () => {
    const app = createApp()

    ;[resourceApi, spaceApi].forEach(async ({ base, apis }) => {
        apis.forEach(async (api) => {
            const actualUrl = urlJoin(['api', base, api.url])
            console.log(`actual url is ${actualUrl}, method is ${api.method}`)
            app[api.method]('/' + actualUrl, async (req, res) => {
                const result = await api.handler(req, res)
                res.status(200)
                res.json(result)
                res.end()
            })
        })
    })

    app.listen(webPort, () => {
        console.log('app listen on', webPort)
        console.log(
            app._router.stack
                .map(({ route }) => route)
                .filter((_) => !!_)
                .map(({ path }) => path),
        )
    })
}

;(async () => {
    try {
        await db.init()
        await appInit()
    } catch (e) {
        console.error(e)
        await db.close()
    }
})()
