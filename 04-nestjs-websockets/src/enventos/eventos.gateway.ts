import{ WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket } from "@nestjs/websockets";
import { EventosService } from "./eventos.service";
import { Server, Socket } from 'socket.io';

@WebSocketGateway(
    11202, // Puerto donde escucha el servidor de websockets
    {
        cors: {
            origin: '*' //Habilitamos la conexión dede cualquier IP
        }
    }
)
export class EventosGateway{
    constructor(private readonly _eventosService: EventosService) {}
}
@SubscribeMessage('hola') // Nombre del metodo para recibir eleventos
devolverHolaMund(
    @MessageBody()
        message:{mensaje: string},
    @ConnectedSocket()
        socket: Socket //import { Server, Socket } from 'socket.io';
){
    console.log('message: ', message);
    socket.broadcast
        .emit(
            'EscucharEvnetoHolaMundo',
            {
                mensaje: this._eventosService.saludar() + ' ' + message.mensaje
            });
            return {mensaje:'OK'}
}
