const { MongoClient } = require('mongodb')

const { dbUri } = require('./env')

const client = new MongoClient(dbUri)

const init = async () => {
    await client.connect()
}

const close = async () => {
    await client.close()
}

module.exports = {
    init,
    close,
    collection: (name) => client.db('resourceManagement').collection(name),
}
