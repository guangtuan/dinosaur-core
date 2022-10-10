import { ReSpace, SpaceCreation } from './Space'

import * as db from '../framework/db'

const spaces = () => db.collection('spaces')

export const all = async (): Promise<Array<ReSpace>> => {
    return (await spaces().find({}).toArray()) as unknown as Array<ReSpace>
}

export const save = async (space: SpaceCreation): Promise<ReSpace> => {
    const result = await spaces().insertOne(space)
    return {
        id: result.insertedId.toString(),
        ...space,
    }
}
