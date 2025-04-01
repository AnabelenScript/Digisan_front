import { Component } from '@angular/core';
import { AlertsService } from '../../../../alerts/infrastructure/alerts.service';

@Component({
  selector: 'app-powdersoap-form',
  templateUrl: './powdersoap-form.component.html',
  styleUrl: './powdersoap-form.component.css'
})
export class PowdersoapFormComponent {

  selectedButton: string = '';
  showAlert: boolean = false; 

  constructor(private alertService: AlertsService){}

  selectButton(button: string) {
    this.selectedButton = this.selectedButton === button ? '' : button;
  }

  start() {
    this.alertService.alertLoading("en polvo")
  }
}
