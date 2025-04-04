import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket: WebSocket | null = null;
  private messageSubject: Subject<any> = new Subject<any>();

  messages$ = this.messageSubject.asObservable();

  connect(): void {
    if (typeof window !== 'undefined' && window.WebSocket) {  
      const wsUrl = 'ws://44.214.196.44/ws';

      this.socket = new WebSocket(wsUrl);

      this.socket.onopen = () => {
        console.log('Conexión WebSocket abierta');
      };
      this.socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          console.log('Mensaje recibido y parseado:', data);
          this.messageSubject.next(data);
        } catch (error) {
          console.error('Error al parsear el mensaje JSON:', error);
        }
      };
      
      this.socket.onerror = (error) => {
        console.error('Error en WebSocket:', error);
      };

      this.socket.onclose = (event) => {
        if (event.wasClean) {
          console.log(`Conexión cerrada de forma limpia: ${event.code}`);
        } else {
          console.error('Conexión cerrada con errores');
        }
      };
    } else {
      console.error('WebSocket no disponible en este entorno');
    }
  }

  sendMessage(message: string): void {
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(message);
      console.log('Mensaje enviado:', message);
    } else {
      console.error('No se puede enviar el mensaje. La conexión WebSocket no está abierta.');
    }
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.close();
      console.log('Conexión WebSocket cerrada');
    }
  }
}
