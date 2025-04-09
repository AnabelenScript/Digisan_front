// src/app/fcm.service.ts
import { Injectable } from '@angular/core';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private messaging;
  private token: string = ""

  constructor() {
    const app = initializeApp({
        apiKey: "AIzaSyBByC2r4oz6AUB4gEt6fb_bOIJkAu5U5Sw",
        authDomain: "digisan-c0cb9.firebaseapp.com",
        projectId: "digisan-c0cb9",
        storageBucket: "digisan-c0cb9.firebasestorage.app",
        messagingSenderId: "367644504697",
        appId: "1:367644504697:web:18407f21d2bb9982f0daa8",
        measurementId: "G-FPHZSDNZ99"
    });
    this.messaging = getMessaging(app);
  }

  requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted');
        this.getToken();
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
  }

  // Obtenemos el token FCM generado para dicho cliente
  getToken() {
    getToken(this.messaging, {
      vapidKey: "BKhzRDmYm_QTUOF1us67olToPqXXaGS__cyzqhfaCXrxVUTZcHrvrDhmBYC6NKcQ02q_sUmR3XU0ohnzb0KI2bE",
    })
      .then((currentToken: any) => {
        if (currentToken) {
          console.log('Token FCM:', currentToken);
          this.token = currentToken
        } else {
          console.log(
            'No registration token available. Request permission to generate one.'
          );
        }
      })
      .catch((error: any) => {
        console.error('Error getting token:', error);
      });
  }

  getTokenClient(): string {
    return this.token
  }

  // Recibir mensajes cuando la aplicación está en primer plano
  receiveMessage() {
    onMessage(this.messaging, (payload: any) => {
      console.log('Message received. ', payload);

      if (payload.notification?.title && payload.notification?.body) {
        this.showNotification(
          payload.notification.title,
          payload.notification.body
        );
      } else {
        console.error('Message Invalid');
      }
    });
  }

  private showNotification(title: string, body: string) {
    if (Notification.permission === 'granted') {
      new Notification(title, {
        body: body,
        icon: '',
      });
    }
  }
}