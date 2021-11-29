const Marcadores = require("./marcadores");

class Sockets {

    constructor( io ) {

        this.io = io;

        this.marcadores = new Marcadores()
        // crear instancia de ticketList
        

  
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on( 'connection', ( socket ) => {
                        
            socket.emit('marcadores-activo', this.marcadores.activos);

            socket.on( 'marcador-nuevo', ( marcador ) => {
                this.marcadores.agregarMarcador( marcador );
                socket.broadcast.emit('marcador-nuevo', marcador);
            })
            

            // TODO: marcador-actualizado
         
        
        });
    }


}


module.exports = Sockets;