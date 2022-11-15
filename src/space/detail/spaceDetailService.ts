import { ReFile, ReFolder, ReResource } from './SpaceDetail'

import fs from 'fs'

import path from 'path'

export const load = (folder: ReFolder): Array<ReResource> => {
    return fs.readdirSync(folder.osFile.fullpath).map(f => {
        const joint = path.join(folder.osFile.fullpath, f)
        const stat = fs.statSync(joint)
        if (stat.isDirectory()) {
            return new ReFolder({
                name: f,
                fullpath: joint
            })
        } else {
            return new ReFile(
                {
                    name: f,
                    fullpath: joint
                },
                folder
            )
        }
    })
}