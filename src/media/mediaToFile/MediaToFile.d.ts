import { ObjectId } from 'mongodb'

export type MediaToFile = {
    mediaId: ObjectId // movieId or tvShowId
    fullPath: string
    spaceId: ObjectId
}

export type MediaToFileStore = {
    _id: ObjectId
} & MediaToFile
