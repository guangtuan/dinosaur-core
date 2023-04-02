import {ObjectId} from "mongodb";
import {ReFileVo} from "../../resources/ReResource";

type Movie = {
    name: String,
    imdb: String,
    douban: String,
    pic: String
}

type MoviePo = Movie & {
    id: ObjectId
}

type MovieVo = Movie & {
    media: ReFileVo
}

type MovieToFile = {
    _id: ObjectId,
    moveId: ObjectId,
    fullPath: string,
    spaceId: ObjectId
}
