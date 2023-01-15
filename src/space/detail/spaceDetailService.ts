import { ReFile, ReFolder, ReResource, OsFile } from './SpaceDetail'

import fs from 'fs'

import path from 'path'

function convert(
    fullpath: string,
): (str: string, _1: number, _2: Array<String>) => ReFile | ReFolder {
    return (f: string, _1: number, _2: Array<String>) => {
        const joint = path.join(fullpath, f)
        const stat = fs.statSync(joint)
        if (stat.isDirectory()) {
            return {
                tag: 'folder',
                osFile: {
                    name: f,
                    fullpath: joint,
                },
            }
        }
        return {
            tag: 'file',
            osFile: {
                name: f,
                fullpath: joint,
            },
        }
    }
}

export const load = (folder: string): ReResource => {
    return {
        on: folder,
        children: fs.readdirSync(folder).map(convert(folder)),
    }
}
