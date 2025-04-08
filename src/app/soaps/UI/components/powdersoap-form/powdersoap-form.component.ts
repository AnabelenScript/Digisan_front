import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../../../alerts/infrastructure/alerts.service';
import { OrderService } from '../../../infraestructure/orders.service';
import { Order } from '../../../domain/models/order';

@Component({
  selector: 'app-powdersoap-form',
  templateUrl: './powdersoap-form.component.html',
  styleUrls: ['./powdersoap-form.component.css']
})
export class PowdersoapFormComponent implements OnInit {
  selectedButton: string = '';
  codigoIdentificador: string | null = null;

  constructor(
    private alertService: AlertsService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('new-user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        this.codigoIdentificador = user.Codigo_Identificador || null;
      }
    }
  }

  selectButton(button: string) {
    this.selectedButton = this.selectedButton === button ? '' : button;
  }

  start() {
    if (!this.codigoIdentificador) {
      this.alertService.alertWrong();
      console.error('Error: No se encontró el código identificador del usuario.');
      return;
    }
  
    const order: Order = {
      Id_Jabon: 1, 
      Cantidad: 0,
      Estado: 2, 
      Costo: 10, 
      Codigo_Identificador: this.codigoIdentificador, // Código dinámico
      Tipo: false 
    };
  
    switch (this.selectedButton) {
      case '250g':
        order.Cantidad = 1;
        break;
      case '500g':
        order.Cantidad = 2;
        break;
      case '1KG':
        order.Cantidad = 3;
        break;
      default:
        alert('Por favor, seleccione una opción válida.');
        return;
    }
  
    const dispatchTime = order.Cantidad * 5 * 1000; // En milisegundos
  
    this.alertService.alertLoading('Creando despacho', dispatchTime / 1000);
  
    this.orderService.create(order).subscribe(
      response => {
        console.log('Orden creada exitosamente:', response);
        
        setTimeout(() => {
          this.alertService.alertSuccess('¡Despacho creado con éxito!');
        }, dispatchTime);
      },
      error => {
        console.error('Error al crear la orden:', error);
        if (error.status === 400 && error.error?.message === 'No hay vaso presente') {
          this.alertService.alertNoVasePresent();
        } else {
          this.alertService.alertWrong();
        }
      }
    );
  }
  
}
