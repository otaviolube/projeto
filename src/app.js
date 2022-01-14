require('dotenv').config({
    path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

const express = require('express');

class App {
    constructor(){
        this.express = express();

        this.database();
        this.middlewares();
        this.routes();
    }

    database(){

    }

    middlewares(){

    }

    routes(){

    }
}

module.exports = new App().express;