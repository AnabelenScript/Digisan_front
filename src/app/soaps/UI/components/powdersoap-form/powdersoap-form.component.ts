import { Component } from '@angular/core';
import { AlertsService } from '../../../../alerts/infrastructure/alerts.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-powdersoap-form',
  templateUrl: './powdersoap-form.component.html',
  styleUrls: ['./powdersoap-form.component.css']
})
export class PowdersoapFormComponent {
  selectedButton: string = '';
  showAlert: boolean = false;
  esp32URL: string = 'http://192.168.1.117'; //la ip unu

  constructor(private alertService: AlertsService, private http: HttpClient) {}

  selectButton(button: string) {
    this.selectedButton = this.selectedButton === button ? '' : button;
  }

  start() {

    // Invocar el endpoint según la opción seleccionada
    switch (this.selectedButton) {
      case '250g':
        this.alertService.alertLoading('en polvo',5 );
        this.http.get(`${this.esp32URL}/open5`).subscribe(
          () => {
            console.log('Puerta abierta por 5 segundos');
          },
          error => {
            console.error('Error al abrir la puerta por 5 segundos:', error);
          }
        );
        break;

      case '500g':
        this.alertService.alertLoading('en polvo', 10);
        this.http.get(`${this.esp32URL}/open10`).subscribe(
          () => {
            console.log('Puerta abierta por 10 segundos');
          },
          error => {
            console.error('Error al abrir la puerta por 10 segundos:', error);
          }
        );
        break;

      case '1KG':
        this.alertService.alertLoading('en polvo', 15);
        this.http.get(`${this.esp32URL}/open15`).subscribe(
          () => {
            console.log('Puerta abierta por 15 segundos');
          },
          error => {
            console.error('Error al abrir la puerta por 15 segundos:', error);
          }
        );
        break;

      default:
        alert('Por favor, seleccione una opción válida.');
        break;
    }
  }

  closeDoor() {
    this.http.get(`${this.esp32URL}/close`).subscribe(
      () => {
        console.log('Puerta cerrada inmediatamente');
      },
      error => {
        console.error('Error al cerrar la puerta:', error);
      }
    );
  }
}