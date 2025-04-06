import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { loadMercadoPago } from '@mercadopago/sdk-js';

@Injectable({
  providedIn: 'root'
})
export class ConnService {
  mp: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeMercadoPago();
    }
  }

  private async initializeMercadoPago() {
    if (isPlatformBrowser(this.platformId)) {
      await loadMercadoPago();
      this.mp = new (window as any).MercadoPago('TEST-a847ecaf-ee74-42fa-a3b3-d966cae8cd42', {
        locale: 'es'
      });    }
  }

  async getMpInstance(): Promise<any> {
    if (!this.mp) {
      await this.initializeMercadoPago();
    }
    return this.mp;
  }

  getFormStatic(): any {
    return {
      id: "form-checkout",
      cardNumber: {
        id: "form-checkout__cardNumber",
        placeholder: "Numero de tarjeta",
      },
      expirationDate: {
        id: "form-checkout__expirationDate",
        placeholder: "MM/YY",
      },
      securityCode: {
        id: "form-checkout__securityCode",
        placeholder: "Código de seguridad",
      },
      cardholderName: {
        id: "form-checkout__cardholderName",
        placeholder: "Titular de la tarjeta",
      },
      issuer: {
        id: "form-checkout__issuer",
        placeholder: "Banco emisor",
      },
      installments: {
        id: "form-checkout__installments",
        placeholder: "Cuotas",
      },        
      cardholderEmail: {
        id: "form-checkout__cardholderEmail",
        placeholder: "E-mail",
      },
    }
  }
}
