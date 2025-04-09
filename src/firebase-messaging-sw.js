import { getMessaging, getToken, onMessage } from "firebase/messaging";


firebase.initializeApp({
  apiKey: "AIzaSyBByC2r4oz6AUB4gEt6fb_bOIJkAu5U5Sw",
  authDomain: "digisan-c0cb9.firebaseapp.com",
  projectId: "digisan-c0cb9",
  storageBucket: "digisan-c0cb9.firebasestorage.app",
  messagingSenderId: "367644504697",
  appId: "1:367644504697:web:18407f21d2bb9982f0daa8",
  measurementId: "G-FPHZSDNZ99"
});

const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);

  console.log('[firebase-messaging-sw.js] Received message ', payload);
  
  const notificationTitle = payload.notification?.title || 'Mensaje';
  const notificationOptions = {
    body: payload.notification?.body || 'Mensaje sin cuerpo',
    icon: ''
  };

  self.registration.showNotification(notificationTitle, notificationOptions);});
 