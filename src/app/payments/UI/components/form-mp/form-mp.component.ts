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
import { UserService } from '../../../infraestructure/create-user-service'; // Importa el servicio de usuario
import { Router } from '@angular/router'; // Importa Router para redirigir después de la transacción exitosa

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
    private alertServ: AlertsService,
    private userService: UserService, 
    private router: Router 
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
                theme: 'custom',
                customVariables: {
                  baseColor: '#3a85cb', 
                  buttonTextColor: '#ffffff', 
                  formBackgroundColor: '#f7fdff63',
                  inputBackgroundColor: '#ffffff', 
                  inputBorderColor: '#cccccc',
                  inputTextColor: '#000000',
                  labelColor: '#333333',
                  errorColor: '#e74c3c',
                  buttonWidth: '300px', 
                  buttonHeight: '20px', 
                  inputHeight: '45px',
                  formPadding: '15px', 
                  inputPadding: '10px',
                  borderRadius: '5px', 
                  buttonBorderRadius: '5px' 
                }
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
                loadingTimeout = setTimeout(() => {
                  this.alertServ.loadPayment();
                }, 500);

                fetch('http://54.156.96.62:8010/pay', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(formData)
                })
                  .then((response) => {
                    clearTimeout(loadingTimeout); 
                    Swal.close(); 
                    return response.json();
                  })
                  .then((response) => {
                    console.log('Respuesta del pago:', response);
                    this.alertServ.alertSuccess("Pago realizado exitosamente"); 
                    const storedUser = localStorage.getItem('new-user');
                    if (storedUser) {
                      const user = JSON.parse(storedUser);
                      this.userService.create(user).subscribe(
                        (response) => {
                          console.log('Usuario creado exitosamente:', response);
                          localStorage.removeItem('new-user');
                          this.router.navigate(['/dashboard']);
                        },
                        (error) => {
                          console.error('Error creando el usuario:', error);
                          this.alertServ.alertWrong();
                        }
                      );
                    } 

                    resolve();
                  })
                  .catch((error) => {
                    clearTimeout(loadingTimeout); 
                    Swal.close();
                    this.alertServ.alertWrong();
                    console.error('Error creando el pago:', error);
                    reject(error);
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
