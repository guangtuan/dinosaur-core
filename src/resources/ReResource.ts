export type FileSize = {
    origin: number

    readable: string
}

export type OsFile = {
    name: string
    fullpath: string
    size: FileSize
}

export type File = {
    tag: 'file'

    osFile: OsFile
}

export type Folder = {
    tag: 'folder'

    osFile: OsFile
}

export type UnionFile = Folder | File

export type FileVo = {
    remote: string
} & File

export type DinosaurResource = {
    on: string
    children: Array<UnionFile>
}
