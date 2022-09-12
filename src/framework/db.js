const { MongoClient } = require('mongodb')

const { dbUri } = require('./env')

const client = new MongoClient(dbUri)

let db = null

const init = async () => {
    await client.connect()
    db = await client.db('resourceManagement')
}

const close = async () => {
    await client.close()
}

module.exports = {
    init,
    close,
    db,
}
