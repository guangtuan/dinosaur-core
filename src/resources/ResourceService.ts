import { ReFile, ReFolder, ReResource, OsFile } from './ReResource'
import { deParse } from '../framework/staticAccess'
import { byName } from '../space/spaceService'

import fs from 'fs'

import path from 'path'
import { SpaceVo } from '../space/Space'

function humanReadAbleFileSize(b: number): string {
    let u = 0
    let s = 1024
    while (b >= s || -b >= s) {
        b /= s
        u++
    }
    return (u ? b.toFixed(1) : b) + ' KMGTPEZY'[u] + 'B'
}

function convert(
    fullpath: string,
    space: SpaceVo,
): (str: string, _1: number, _2: Array<String>) => ReFile | ReFolder {
    return (f: string, _1: number, _2: Array<String>) => {
        const joint = path.join(fullpath, f)
        const stat = fs.statSync(joint)
        if (stat.isDirectory()) {
            return {
                tag: 'folder',
                osFile: {
                    size: {
                        origin: stat.size,
                        readable: humanReadAbleFileSize(stat.size),
                    },
                    name: f,
                    fullpath: joint,
                },
            }
        }
        return {
            tag: 'file',
            osFile: {
                size: {
                    origin: stat.size,
                    readable: humanReadAbleFileSize(stat.size),
                },
                name: f,
                fullpath: joint,
            },
            remote: deParse(space, joint),
        }
    }
}

type ResourceQuery = {
    on: string
    space: string
}

export const load = async (
    resourceQuery: ResourceQuery,
): Promise<ReResource> => {
    const space = await byName(resourceQuery.space)
    return {
        on: resourceQuery.on,
        children: fs
            .readdirSync(resourceQuery.on)
            .map(convert(resourceQuery.on, space)),
    }
}
