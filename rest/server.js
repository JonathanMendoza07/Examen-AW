const express = require('express');
const cors = require('cors');
const connectionDB = require('./database/config');

const PORT = require('./config');

class Server
{
    constructor(){
        this.app=express();
        this.port=PORT;

        this.DBconect();
        this.middlewares();
        this.routes();
    }

    async DBconect(){
        await connectionDB();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }



    routes(){
        this.app.use('/', require('./routes/menbresia.routes'));
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`This Server is running in: http://localhost:${this.port}`);
        })
    }

}

module.exports = Server;