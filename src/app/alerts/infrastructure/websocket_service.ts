import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: WebSocket | null = null;
  private messageSubject: Subject<any> = new Subject<any>();
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectInterval = 3000; // 3 segundos
  private connectionUrl: string;

  public messages$: Observable<any> = this.messageSubject.asObservable();

  constructor() {
    // Configura la URL basada en el entorno
    this.connectionUrl = this.getWebSocketUrl();
  }

  public connect(): void {
    if (this.socket && (this.socket.readyState === WebSocket.OPEN || this.socket.readyState === WebSocket.CONNECTING)) {
      console.warn('Ya existe una conexión WebSocket activa o en conexión');
      return;
    }

    if (typeof window === 'undefined' || !('WebSocket' in window)) {
      console.error('WebSocket no está disponible en este entorno');
      return;
    }

    this.socket = new WebSocket(this.connectionUrl);

    this.socket.onopen = () => {
      console.log('Conexión WebSocket establecida');
      this.reconnectAttempts = 0; // Resetear intentos de reconexión
    };

    this.socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        this.messageSubject.next(data);
      } catch (error) {
        console.error('Error al parsear el mensaje WebSocket:', error, 'Datos recibidos:', event.data);
      }
    };

    this.socket.onerror = (error) => {
      console.error('Error en WebSocket:', error);
    };

    this.socket.onclose = (event) => {
      if (event.wasClean) {
        console.log(`Conexión cerrada limpiamente, código: ${event.code}, razón: ${event.reason}`);
      } else {
        console.error('Conexión perdida, intentando reconectar...');
        this.handleReconnection();
      }
    };
  }

  private handleReconnection(): void {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log(`Intento de reconexión ${this.reconnectAttempts}/${this.maxReconnectAttempts}`);
      
      setTimeout(() => {
        this.connect();
      }, this.reconnectInterval);
    } else {
      console.error(`Máximo de intentos de reconexión alcanzado (${this.maxReconnectAttempts})`);
      this.messageSubject.error('No se pudo reconectar al servidor WebSocket');
    }
  }

  public sendMessage(message: any): void {
    if (!this.socket) {
      console.error('WebSocket no está inicializado');
      return;
    }

    if (this.socket.readyState !== WebSocket.OPEN) {
      console.error('WebSocket no está conectado. Estado:', this.socket.readyState);
      return;
    }

    try {
      const messageStr = typeof message === 'string' ? message : JSON.stringify(message);
      this.socket.send(messageStr);
    } catch (error) {
      console.error('Error al enviar mensaje WebSocket:', error);
    }
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.close(1000, 'Cierre solicitado por el cliente');
      this.socket = null;
    }
  }
 private getWebSocketUrl(): string {
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'ws://localhost:8001/ws'; // Para desarrollo local
  } else {
    return 'ws://52.202.202.197/ws'; // ⭐ Usa tu IP pública de EC2 aquí
    // Alternativa mejor (si tienes dominio):
    // return 'wss://tudominio.com/ws'; // Usa "wss" si tienes HTTPS
// o si quitamos el fokin puerto del despliegue
// return ws://${window.location.host}/ws;
  }
 }
}