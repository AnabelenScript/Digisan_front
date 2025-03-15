import { Component } from '@angular/core';

@Component({
  selector: 'app-liquidsoap-form',
  templateUrl: './liquidsoap-form.component.html',
  styleUrls: ['./liquidsoap-form.component.css']
})
export class LiquidsoapFormComponent {
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
