const express = require('express')
const routes = require('./routes')


class app {
    constructor() {
        this.server = express();
        this.routes();
    }

    routes() {
        this.server.use(routes)
    }
}

module.exports = new app().server;