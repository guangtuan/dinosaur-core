const { all, save } = require('./spaceService')

module.exports = {
    base: 'space',
    apis: [
        {
            method: 'get',
            url: '',
            handler: async (req, res) => {
                return await all()
            },
        },
        {
            method: 'post',
            url: '',
            handler: async (req, res) => {
                const body = req.body
                return await save(body)
            },
        },
    ],
}
