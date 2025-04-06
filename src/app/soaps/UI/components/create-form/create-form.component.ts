import { Component } from '@angular/core';
import { SoapService } from '../../../infraestructure/soaps_service';
import { Soaps } from '../../../domain/models/soaps';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {
  tipoJabon: string = '';  // Guardará 'liquido' o 'polvo'
  marca: string = '';
  nombre: string = '';
  precio: number | null = null;
  densidad: number | null = null;

  constructor(private soapService: SoapService) {}
  seleccionarTipo(tipo: string): void {

    if (this.tipoJabon === tipo) {
      this.tipoJabon = '';
    } else {
      this.tipoJabon = tipo; 
    }
  }

  guardarJabon(): void {
    if (!this.marca || !this.nombre || !this.precio || !this.densidad || !this.tipoJabon) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    const nuevoJabon: Soaps = {
      Id: 0, 
      Nombre: this.nombre,
      Marca: this.marca,
      Tipo: this.tipoJabon, 
      Precio: this.precio,
      Densidad: this.densidad
    };

    this.soapService.create(nuevoJabon).subscribe(
      (response) => {
        alert('✅ Jabón agregado exitosamente.');
        this.limpiarFormulario();
      },
      (error) => {
        console.error('❌ Error al agregar jabón:', error);
        alert('Hubo un error al guardar el jabón.');
      }
    );
  }

  limpiarFormulario(): void {
    this.marca = '';
    this.nombre = '';
    this.tipoJabon = '';
    this.precio = null;
    this.densidad = null;
  }
}
