


const socketController = (socket) => {
    // El cliente se conecta
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () =>{
        console.log('Cliente desconectado', socket.id);
    })

    socket.on('enviar-mensaje', ( payload, callback ) => {

        const id = 123456;

        callback( id );

        
        // Emitir mensaje desde el servidor
        socket.broadcast.emit('enviar-mensaje', payload );
    })
}

module.exports = {
    socketController
}