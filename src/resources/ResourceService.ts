import { Folder, DinosaurResource, FileVo, UnionFile } from './ReResource'
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

function fileInfo(absPath: string, f: string): UnionFile {
    const stat = fs.statSync(absPath)
    if (stat.isDirectory()) {
        return {
            tag: 'folder',
            osFile: {
                size: {
                    origin: stat.size,
                    readable: humanReadAbleFileSize(stat.size),
                },
                name: f,
                fullpath: absPath,
            },
        }
    } else {
        return {
            tag: 'file',
            osFile: {
                size: {
                    origin: stat.size,
                    readable: humanReadAbleFileSize(stat.size),
                },
                name: f,
                fullpath: absPath,
            },
        }
    }
}

export function extractSpace(
    fullpath: string,
    space: SpaceVo,
): (str: string, _1: number, _2: Array<String>) => FileVo | Folder {
    return (f: string, _1: number, _2: Array<String>) => {
        const joint = path.join(fullpath, f)
        const unionFile = fileInfo(joint, f)
        if (unionFile.tag == 'file') {
            return {
                ...unionFile,
                remote: deParse(space, unionFile.osFile.fullpath),
            }
        } else {
            return unionFile
        }
    }
}

type ResourceQuery = {
    on: string
    space: string
}

export const load = async (
    resourceQuery: ResourceQuery,
): Promise<DinosaurResource> => {
    const space = await byName(resourceQuery.space)
    return {
        on: resourceQuery.on,
        children: fs.readdirSync(resourceQuery.on).map((f: string) => {
            const joint = path.join(resourceQuery.on, f)
            const unionFile = fileInfo(joint, f)
            if (unionFile.tag == 'file') {
                return {
                    ...unionFile,
                    remote: deParse(space, unionFile.osFile.fullpath),
                }
            } else {
                return unionFile
            }
        }),
    }
}
