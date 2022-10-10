const R = require('ramda')

const removeStart = (ch: string) => (str: string) => {
    if (str.startsWith(ch)) {
        return str.slice(ch.length)
    }
    return str
}

const removeEnd = (ch: string) => (str: string) => {
    if (str.endsWith(ch)) {
        return str.slice(0, -1 * ch.length)
    }
    return str
}

const handle = R.compose(removeStart('/'), removeEnd('/'))

export default R.pipe(R.reject(R.isEmpty), R.map(handle), R.join('/'))
