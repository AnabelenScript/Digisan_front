import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import Swal from 'sweetalert2';
import { isPlatformBrowser } from '@angular/common';
import { loadMercadoPago } from '@mercadopago/sdk-js';
import { ConnService } from '../../../infraestructure/conn_payment';
import { PaymentsMpService } from '../../../infraestructure/mercadopago_payment';
import { AlertsService } from '../../../../alerts/infrastructure/alerts.service';

@Component({
  selector: 'app-form-mp',
  templateUrl: './form-mp.component.html',
  styleUrls: ['./form-mp.component.css']
})
export class FormMpComponent implements OnInit {
  isSubmiting: boolean = false;
  ultimos: string = '';
  cardholderValid: boolean = true;
  mp: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private mpServ: ConnService,
    private payMpServ: PaymentsMpService,
    private alertServ: AlertsService
  ) {}

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      await loadMercadoPago();
      this.mp = new (window as any).MercadoPago('APP_USR-4ef70040-1515-410b-ad71-965319adbd52', {
        locale: 'es'
      });

      const bricksBuilder = this.mp.bricks();

      const renderPaymentBrick = async (bricksBuilder: any) => {
        const settings = {
          initialization: {
            amount: 10000,
            preferenceId: 1,
            payer: {
              firstName: '',
              lastName: '',
              email: ''
            }
          },
          customization: {
            visual: {
              style: {
                theme: 'default'
              }
            },
            paymentMethods: {
              debitCard: 'all',
              atm: 'all',
              wallet_purchase: 'all',
              maxInstallments: 1
            }
          },
          callbacks: {
            onReady: () => {
              console.log('Brick listo');
            },
            onSubmit: ({
              selectedPaymentMethod,
              formData
            }: {
              selectedPaymentMethod: any;
              formData: any;
            }) => {
              return new Promise<void>((resolve, reject) => {
                let loadingTimeout: any;

                // Mostrar alerta de "cargando" si pasan 0.5 segundos sin respuesta
                loadingTimeout = setTimeout(() => {
                  this.alertServ.loadPayment();
                }, 500);

                fetch('http://localhost:8000/pay', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(formData)
                })
                  .then((response) => {
                    clearTimeout(loadingTimeout); // Limpia el temporizador al recibir respuesta
                    Swal.close(); // Cierra la alerta de carga
                    return response.json();
                  })
                  .then((response) => {
                    console.log('Respuesta del pago:', response);
                    this.alertServ.alertSuccess("Pago realizado exitosamente"); // Mostrar alerta de éxito
                    resolve(); // correctamente tipado
                  })
                  .catch((error) => {
                    clearTimeout(loadingTimeout); // Limpia el temporizador si hay un error
                    Swal.close(); // Cierra la alerta de carga
                    this.alertServ.alertWrong(); // Mostrar alerta de error en caso de fallo
                    console.error('Error creando el pago:', error);
                    reject(error); // pasamos el error
                  });
              });
            },
            onError: (error: any) => {
              console.error('Error en el brick:', error);
            }
          }
        };

        (window as any).paymentBrickController = await bricksBuilder.create(
          'payment',
          'paymentBrick_container',
          settings
        );
      };

      renderPaymentBrick(bricksBuilder);
    }
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
}
