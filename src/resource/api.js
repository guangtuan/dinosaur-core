const walk = require("./service");

const defaultDir = (process.env["R_MANAGE_DEFAULT_DIR"] || "").split(",");

console.log(`start application, default dir is ${defaultDir}`);

module.exports = {
    base: "resource",
    apis: [
        {
            method: "get",
            url: "index",
            handler: async (req, res) => {
                return Promise.all(defaultDir.map(walk));
            },
        },
    ],
};
