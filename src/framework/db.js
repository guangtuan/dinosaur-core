const { MongoClient } = require('mongodb')

const { dbUri } = require('./env')

const client = new MongoClient(dbUri)

const init = async () => {
    await client.connect()
    await client.db('admin').command({ ping: 1 })
}

const close = async () => {
    await client.close()
}

module.exports = {
    init,
    close,
    client,
}
