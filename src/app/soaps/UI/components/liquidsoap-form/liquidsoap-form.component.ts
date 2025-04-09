import { Component } from '@angular/core';
import { AlertsService } from '../../../../alerts/infrastructure/alerts.service';
import { FirebaseService } from '../../../../alerts/infrastructure/firebase.service';
import { NotificationService } from '../../../../alerts/infrastructure/notification.service';

@Component({
  selector: 'app-liquidsoap-form',
  templateUrl: './liquidsoap-form.component.html',
  styleUrls: ['./liquidsoap-form.component.css']
})
export class LiquidsoapFormComponent {
  selectedButton: string = '';
  showAlert: boolean = false; 

  constructor(private alertService: AlertsService,
    private firebaseService: FirebaseService,
    private notificationService: NotificationService
  ){}

  selectButton(button: string) {
    this.selectedButton = this.selectedButton === button ? '' : button;
  }

  start() {
    this.alertService.alertLoading('liquido', 5)
    setTimeout(this.sendAlert, 5000)
  }

  sendAlert(tittle: string, body: string) {
    var fcmToken = this.firebaseService.getTokenClient()

    if (fcmToken) {
      this.notificationService.sendAlert(fcmToken, tittle, body).subscribe(
        (response) => {
          console.log('Alerta enviada al servidor', response);
        },
        (error) => {
          console.error('Error al enviar la alerta:', error);
        }
      );
    } else {
      console.log('No se ha obtenido el token FCM aún.');
    }
  }
}
