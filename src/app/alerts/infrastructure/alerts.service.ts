import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  alertLowLevel(tipo: string, codigoMaquina: number) {
    Swal.fire({
      title: codigoMaquina,
      text: `Su jabon ${tipo} se esta acabando, rellenelo, por favor`,
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

  alertLoading(tipo: string) {
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
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="liquid" />
                </filter>
              </defs>
            </svg>
          </div>

          <div>
            <h2>Por favor, espere</h2>
            <p>Su jabon ${tipo} se esta despachando<p>
          </div>
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
