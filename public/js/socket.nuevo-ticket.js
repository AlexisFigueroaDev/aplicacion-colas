//Comando para establecer la conexion 
let socket = io();

let label = $('#lblNuevoTicket')

socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('desconectado al servidor');
});

//on 'estadoActual'
socket.on('estadoActual', (resp) => {

    console.log(resp);
    label.text(resp.actual)
})

$('button').on('click', () => {

    socket.emit('siguienteTicket', null, (siguienteTicket) => {

        label.text(siguienteTicket);

    });
})