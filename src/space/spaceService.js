const { collection } = require('../framework/db')

const spaces = () => collection('spaces')

module.exports = {
    all: async () => {
        return spaces().find({}).toArray()
    },
    save: async (space) => {
        await spaces().insertOne(space)
        return space
    },
}
