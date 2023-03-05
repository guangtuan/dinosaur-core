import express from 'express'

import { all as spaceList } from '../space/spaceService'
import { SpaceVo } from '../space/Space'
import { staticHost } from './env'
import joinUrl from '../url'

const namespace = 'space'

export const inject = async (app: express.Application) => {
    for (let space of await spaceList()) {
        app.use(
            `/${namespace}/${space.name}`,
            express.static(space.physicsPath),
        )
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
    return joinUrl([
        staticHost,
        namespace,
        physicsPathForAFile.replace(spaceVo.physicsPath, spaceVo.name),
    ])
}
