import { Component } from '@angular/core';
import { AlertsService } from '../../../../alerts/infrastructure/alerts.service';

@Component({
  selector: 'app-liquidsoap-form',
  templateUrl: './liquidsoap-form.component.html',
  styleUrls: ['./liquidsoap-form.component.css']
})
export class LiquidsoapFormComponent {
  selectedButton: string = '';
  showAlert: boolean = false; 

  constructor(private alertService: AlertsService){}

  selectButton(button: string) {
    this.selectedButton = this.selectedButton === button ? '' : button;
  }

  start() {
    this.alertService.alertLoading('liquido', 5)
  }
}
