import { Movie, MovieStore } from './movie/Movie'
import { SeriesStore, Series } from './tv/Tv'

export type SeriesPost = Series & {
    tag: 'Series'
}

export type MoviePost = Movie & {
    tag: 'movie'
}

export type MediaPost = MoviePost | SeriesPost
