// define a enum: media: tv, movie, music
export enum MediaType {
    movie,
    tv,
    music
}

export type MedisDisplay = {
    name: string,
    type: MediaType,
    pic: string
}