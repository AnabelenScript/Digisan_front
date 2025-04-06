import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { Style } from 'util';


@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  alertLowLevel(tipo: string, codigoMaquina: number) {
    Swal.fire({
      title: `Su jabon ${tipo} se esta acabando, rellenelo, por favor`,
      text: `El codigo de la maquina es ${codigoMaquina}`,
      icon: "warning",
      iconColor: "#D02010",
      customClass: {
        popup: 'custom-popup-style',
        confirmButton: 'swal-button-cofirm',
        icon: 'icon-swal',
        title: 'title-swal'
      }
    });
  }

  invalidCredentials(){
    Swal.fire({
      icon: "error",
      iconColor: "#D02010",
      title: "Credenciales invalidas",
      text: "Intenta de nuevo, por favor",
      customClass: {
        popup: 'custom-popup-style',
        confirmButton: 'swal-button-cofirm',
        icon: 'icon-swal',
        title: 'title-swal'

      }
    });
  }

  alertWrong() {
    Swal.fire({
      icon: "error",
      iconColor: "#D02010",
      title: "Lo sentimos",
      text: "Ocurrio algun error",
      customClass: {
        popup: 'custom-popup-style',
        confirmButton: 'swal-button-cofirm',
        icon: 'icon-swal',
        title: 'title-swal'

      }
    });
  }

  alertSuccess(mensaje: string) {
    Swal.fire({
      icon: "success",
      iconColor: "#87A330",
      title: "Listo",
      text: mensaje,
      customClass: {
        popup: 'custom-popup-style',
        confirmButton: 'swal-button-cofirm',
        icon: 'icon-swal',
        title: 'title-swal'
      }
    });
  }

  alertLoading(tipo: string, secs: number) {
    Swal.fire({
      html: `
        <div class="loader-container">
          <div class="loader">
            <div class="loader-bg">
              <span>Sirviendo</span>
            </div>
            <div class="drops">
              <div class="drop1"></div>
              <div class="drop2"></div>  
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="liquid">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                <feColorMatrix mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 2 0 0  0 0 0 18 -7" result="liquid" />
              </filter>
            </defs>
          </svg>
        </div>
        <div>
          <h2>Por favor, espere</h2>
          <p>Su jabon ${tipo} se esta despachando<p>
        </div>
        <style> 
        .custom-popup-style{
        background-color: #dadada;
        }
        </style>
      `,
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false,
      focusConfirm: false,
      timer: secs*1000,
      customClass: {
        popup: 'custom-popup-style',
        htmlContainer: 'swal-class-container-load'
      }
    });
  }

  loadPayment() {
    Swal.fire({
      html: `
        <div class="loader-container">
          <div class="loader">
            <div class="loader-bg">
              <span>Procesando</span>
            </div>
            <div class="drops">
              <div class="drop1"></div>
              <div class="drop2"></div>  
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="liquid">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                <feColorMatrix mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 2 0 0  0 0 0 18 -7" result="liquid" />
              </filter>
            </defs>
          </svg>
        </div>
        <div>
          <h2>Por favor, espere</h2>
          <p>Estamos procesando su pago<p>
        </div>
        <style> 
        .custom-popup-style{
        background-color: #dadada;
        }
        </style>
      `,
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false,
      focusConfirm: false,
      customClass: {
        popup: 'custom-popup-style',
        htmlContainer: 'swal-class-container-load'
      }
    });
  }
}
