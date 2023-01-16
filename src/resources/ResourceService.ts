import { ReFile, ReFolder, ReResource, OsFile } from './ReResource'

import fs from 'fs'

import path from 'path'

function humanReadAbleFileSize(b: number): string {
    var u = 0, s = 1024;
    while (b >= s || -b >= s) {
        b /= s;
        u++;
    }
    return (u ? b.toFixed(1) : b) + ' KMGTPEZY'[u] + 'B';
}

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
            size: {
                origin: stat.size,
                readable: humanReadAbleFileSize(stat.size)
            },
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
