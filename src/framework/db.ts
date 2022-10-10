import { MongoClient, Collection } from 'mongodb'

const { dbUri } = require('./env')

const client = new MongoClient(dbUri)

export const init = async (): Promise<MongoClient> => {
    return client.connect()
}

export const close = async (): Promise<void> => {
    await client.close()
}

export const collection = (name: string): Collection =>
    client.db('resourceManagement').collection(name)
