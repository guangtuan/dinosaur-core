export type OsFile = {
    name: string
    fullpath: string
    size: FileSize
}

export type FileSize = {
    origin: number

    readable: string
}

export type ReFile = {
    tag: 'file'

    osFile: OsFile
}

export type ReFolder = {
    tag: 'folder'

    osFile: OsFile
}

export type ReFileVo = {
    remote: string
} & ReFile

export type ReResource = {
    on: string
    children: Array<ReFolder | ReFileVo>
}
