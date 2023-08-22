// Referencias al HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');





const socket = io();

// EL on es para estar escuchando algun evento
socket.on('connect', () => {
    // console.log('Conectado');

    // Cambiar estado segun conexion
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
})

socket.on('disconnect', () => {
    console.log('Desconectado');

    // Cambiar estado segun conexion
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
})

socket.on('enviar-mensaje', ( payload ) => {
    console.log(payload);
})


btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        id: 1234,
        mensaje: mensaje,
        autor: 'Yechua'
    }
    socket.emit('enviar-mensaje', payload, ( peo ) => {
        console.log('Desde el tercer argumento', peo);
    });
})