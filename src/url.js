const R = require('ramda')

const removeStart = (ch) => (str) => {
    if (str.startsWith(ch)) {
        return str.slice(ch.length)
    }
    return str
}

const removeEnd = (ch) => (str) => {
    if (str.endsWith(ch)) {
        return str.slice(0, -1 * ch.length)
    }
    return str
}

const handle = R.compose(removeStart('/'), removeEnd('/'))

module.exports = R.pipe(R.reject(R.isEmpty), R.map(handle), R.join('/'))
