export type searchByText = (r: SearchRequest) => Promise<SearchResult[]>

export type SearchResult = {
    id: string
    pic: string
}

export type SearchRequest = {
    keyword: string
}
