import { searchByText, SearchRequest, SearchResult } from './searcher'

import createHttpsProxyAgent from 'https-proxy-agent'
import fetch from 'node-fetch'

import { tmdbApiKey, httpsProxy } from '../../framework/env'

const proxy = () => {
    if (httpsProxy) {
        return createHttpsProxyAgent(httpsProxy)
    } else {
        return null
    }
}

const proxyOptions = (options: any) => {
    const p = proxy()
    if (p == null) {
        return options
    }
    return {
        ...options,
        agent: p,
    }
}

type TMBDSearchResponse = {
    results: any
}

export const impl: searchByText = async (
    r: SearchRequest,
): Promise<Array<SearchResult>> => {
    // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    const host = 'https://api.themoviedb.org/3'
    const path = '/search/movie'
    const queries = {
        query: r.keyword,
        api_key: tmdbApiKey,
        language: 'zh-CN',
        page: '1',
        include_adult: 'false',
    }
    const resp = await fetch(
        `${host}${path}?${new URLSearchParams(queries)}`,
        proxyOptions({}),
    )
    const json = (await resp.json()) as TMBDSearchResponse
    return (json.results || []).map((r: any) => ({
        id: r.id,
        name: r.title,
        pic: r.poster_path,
    }))
}
