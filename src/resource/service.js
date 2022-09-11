const fs = require("fs");
const path = require("path");
const Resource = require("./Resource");

const isDirectory = (p) => fs.lstatSync(p).isDirectory();

const walk = (dir) => {
    const f = fs.readdirSync(dir).map((name) => path.join(dir, name));
    return {
        name: dir,
        root: dir,
        content: f.map((value) => {
            console.log(`f is ${value}`);
            if (isDirectory(value)) {
                const children = walk(value);
                return new Resource(value, children);
            } else {
                return new Resource(value);
            }
        }),
    };
};

module.exports = walk;
