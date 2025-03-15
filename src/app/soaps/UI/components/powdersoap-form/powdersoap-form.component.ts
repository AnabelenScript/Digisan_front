import { Component } from '@angular/core';
import { RechargeAlertComponent } from "../recharge-alert/recharge-alert.component";

@Component({
  selector: 'app-powdersoap-form',
  templateUrl: './powdersoap-form.component.html',
  styleUrl: './powdersoap-form.component.css'
})
export class PowdersoapFormComponent {

  selectedButton: string = '';
  showAlert: boolean = false; 

  selectButton(button: string) {
    this.selectedButton = this.selectedButton === button ? '' : button;
  }

  start() {
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 10000);
  }
}
