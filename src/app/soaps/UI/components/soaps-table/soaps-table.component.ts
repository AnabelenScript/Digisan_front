import { Component, OnInit } from '@angular/core';
import { SoapService } from '../../../infraestructure/soaps_service';
import { Soaps } from '../../../domain/models/soaps';

@Component({
  selector: 'app-soaps-table',
  templateUrl: './soaps-table.component.html',
  styleUrls: ['./soaps-table.component.css']
})
export class SoapsTableComponent implements OnInit {
  soaps: Soaps[] = [];

  constructor(private soapService: SoapService) {}

  ngOnInit(): void {
    this.loadSoaps();
  }

  loadSoaps(): void {
    this.soapService.getAll().subscribe(
      (data: Soaps[]) => {
        this.soaps = data;
      },
      (error) => {
        console.error('Error al obtener los jabones:', error);
      }
    );
  }
}
