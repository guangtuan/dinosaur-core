import { SpacePo, SpaceCreation, SpaceVo } from './Space'

import * as db from '../framework/db'
import { ObjectId } from 'mongodb'

const spaces = () => db.collection('spaces')

export const all = async (): Promise<Array<SpaceVo>> => {
    const pos = (await spaces().find({}).toArray()) as Array<SpacePo>
    return pos.map((po) => ({
        id: po._id.toString(),
        name: po.name,
        physicsPath: po.physicsPath,
    }))
}

export const save = async (space: SpaceCreation): Promise<SpaceVo> => {
    const result = await spaces().insertOne(space)
    return {
        id: result.insertedId.toString(),
        name: space.name,
        physicsPath: space.physicsPath,
    }
}

export const update = async (
    id: string,
    space: SpaceCreation,
): Promise<SpaceVo> => {
    console.log(`set to ${JSON.stringify(space)}`)
    await spaces().updateOne({_id: new ObjectId(id)}, {"$set": space})
    return {
        id: id,
        ...space,
    }
}
