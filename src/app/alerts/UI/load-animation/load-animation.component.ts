import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';
import { AlertsService } from '../../infrastructure/alerts.service';
import { WebSocketService } from '../../infrastructure/websocket_service';
import { Alerts } from '../../domain/models/alerts';
import { isPlatformBrowser } from '@angular/common'; 

@Component({
  selector: 'app-load-animation',
  templateUrl: './load-animation.component.html',
  styleUrls: ['./load-animation.component.css']
})
export class LoadAnimationComponent implements OnInit {
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;

  alerts: Alerts[] = [];
  constructor(
    private alertService: AlertsService,
    private wsService: WebSocketService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const userData = localStorage.getItem('loggedUser');
      const loggedUser = userData ? JSON.parse(userData) : null;
      this.wsService.connect();
      this.wsService.messages$.subscribe((messages: any) => {
        console.log('Datos recibidos en LoadAnimationComponent:', messages);
        const alertsArray: Alerts[] = Array.isArray(messages) ? messages : [messages];
        alertsArray.forEach((alert) => {
          if (typeof alert.tipo !== 'undefined' && typeof alert.codigo_identificador !== 'undefined') {
            if (loggedUser.codigo_identificador === alert.codigo_identificador) {
              console.log(loggedUser.codigo_identificador, alert.codigo_identificador)
              const tipoJabon = alert.tipo === true ? "líquido" : "en polvo";
              this.alertWarning(tipoJabon, alert.codigo_identificador); 
            }
          }
        });
        this.alerts = [...this.alerts, ...alertsArray];
      });
    }
  }

  alertLoad(liquid: string) {
    this.alertService.alertLoading(liquid);
  }
  alertWarning(tipo: string, codigoMaquina: number) {
    this.alertService.alertLowLevel(tipo, codigoMaquina);
  }

  alertWrong() {
    this.alertService.alertWrong();
  }
}
