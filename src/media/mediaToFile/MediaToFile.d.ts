import { ObjectId } from 'mongodb'

export type MediaToFile = {
    mediaId: string // movieId or tvShowId
    fullPath: string
    spaceId: string
}

export type MediaToFileStore = {
    _id: ObjectId
} & MediaToFile
