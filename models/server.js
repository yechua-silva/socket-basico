const express = require('express');
const cors = require('cors');
const { socketController } = require('../controllers/controllers');


class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        // Socket.io
        this.server = require('http').createServer(this.app);
        // socket.io
        this.io = require('socket.io')(this.server)

        this.paths = {}

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        //Configuracion de socket
        this.sockets();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        // this.app.use( this.paths.auth, require('../routes/auth'));
    }

    sockets() {
        this.io.on('connection', socketController )


    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;