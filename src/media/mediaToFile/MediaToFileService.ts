import * as db from '../../framework/db'
import { MediaToFileStore } from './MediaToFile'

const mediaToFile = () => db.collection('mediaToFile')

/**
 * 泛型支持
 *
 * @param keyExtractor fn who get string from T
 * @return Array<T> => Record<string, T>
 */
const indexBy =
    <T>(keyExtractor: (t: T) => string) =>
    (ts: Array<T>): Record<string, T> => {
        return ts.reduce((acc, cur) => {
            acc[keyExtractor(cur)] = cur
            return acc
        }, {} as Record<string, T>)
    }

export const all = async (): Promise<Record<string, MediaToFileStore>> => {
    const indexByMediaId = indexBy<MediaToFileStore>((it) =>
        it.mediaId.toHexString(),
    )
    const movieToFiles = (await mediaToFile()
        .find({})
        .toArray()) as unknown as Array<MediaToFileStore>
    return indexByMediaId(movieToFiles)
}
