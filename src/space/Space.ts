import { ObjectId } from 'mongodb'

export type SpacePo = {
    _id: ObjectId
    name: string
    physicsPath: string
}

export type SpaceVo = {
    id: string
    name: string
    physicsPath: string
}

export type SpaceCreation = {
    name: string
    physicsPath: string
}
