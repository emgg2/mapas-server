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
            console.log("Cliente conectado");
            
            // TODO: marcadores-activos

            // TODO: marcador-nuevo

            // TODO: marcador-actualizado
         
        
        });
    }


}


module.exports = Sockets;