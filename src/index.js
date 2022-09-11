const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const urlJoin = require("./url");

const resourceApi = require("./resource/api");

const createApp = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    return app;
};

(async () => {
    const app = createApp();

    [resourceApi].forEach(async ({ base, apis }) => {
        apis.forEach(async (api) => {
            const actualUrl = urlJoin(["api", base, api.url]);
            console.log(`actual url is ${actualUrl}, method is ${api.method}`);
            app[api.method]("/" + actualUrl, async (req, res) => {
                const result = await api.handler(req, res);
                res.status(200);
                res.json(result);
                res.end();
            });
        });
    });

    const port = 15889;

    app.listen(port, () => {
        console.log("app listen on", port);
        console.log(
            app._router.stack
                .map(({ route }) => route)
                .filter((_) => !!_)
                .map(({ path }) => path)
        );
    });
})();
