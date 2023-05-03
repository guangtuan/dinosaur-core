import { MediaPost } from './media'
import { create as createMovie } from './movie/MovieService'
import { create as createSeries } from './tv/TvService'

export const uninoCreate = async (mediaPost: MediaPost): Promise<boolean> => {
    switch (mediaPost.tag) {
        case 'movie':
            await createMovie({
                name: mediaPost.name,
                cover: mediaPost.cover,
            })
            return true
        case 'Series':
            await createSeries({
                name: mediaPost.name,
                cover: mediaPost.cover,
            })
            return true
    }
}
