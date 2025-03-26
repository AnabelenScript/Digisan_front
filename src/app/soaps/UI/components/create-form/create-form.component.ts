import { Component } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {
  tipoJabon: string = ''; // Solo se podrá seleccionar un tipo de jabón

  seleccionarTipo(tipo: string) {
    if (this.tipoJabon === tipo) {
      this.tipoJabon = ''; // Si se vuelve a hacer clic en el mismo, se deselecciona
    } else {
      this.tipoJabon = tipo; // Si es diferente, se selecciona este tipo
    }
  }
}
