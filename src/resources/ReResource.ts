export type OsFile = {
    name: string
    fullpath: string
}

export type FileSize = {
    origin: number

    readable: string
}

export type ReFile = {
    tag: 'file'

    size: FileSize

    osFile: OsFile
}

export type ReFolder = {
    tag: 'folder'

    osFile: OsFile
}

export type ReResource = {
    on: string
    children: Array<ReFolder | ReFile>
}
