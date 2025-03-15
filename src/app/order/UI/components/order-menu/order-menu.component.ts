import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.css']
})
export class OrderMenuComponent {
  
  constructor(private router: Router) { }

  LiquidRoute() {
    this.router.navigate(['/liquid']);
  }
  PowderRoute() {
    this.router.navigate(['/powder'])
  }
}
