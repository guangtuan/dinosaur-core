import {ObjectId} from "mongodb";

export type MovieToFile = {
    _id: ObjectId
    mediaId: ObjectId // movieId or tvShowId
    fullPath: string
    spaceId: ObjectId
}
