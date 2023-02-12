import express from 'express'

import { all as spaceList } from '../space/spaceService'
import { SpaceVo } from '../space/Space'

export const inject = async (app: express.Application) => {
    for (let space of await spaceList()) {
        app.use(`/space/${space.name}`, express.static(space.physicsPath))
    }
}

export const deParse = (
    spaceVo: SpaceVo,
    physicsPathForAFile: string,
): string => {
    console.log(
        JSON.stringify({
            physicsPathForAFile,
            spaceVo,
        }),
    )
    return physicsPathForAFile.replace(spaceVo.physicsPath, spaceVo.name)
}
