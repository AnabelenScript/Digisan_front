import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {
  constructor(private router: Router) {}

  comenzar(): void {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('loggedUser');
      const loggedUser = userData ? JSON.parse(userData) : null;
      if (loggedUser) {
        if (loggedUser.rol === 2) {
          this.router.navigate(['/soaps']);
        } else {
          this.router.navigate(['/menu']); 
        }
      } else {
        alert('No hay usuario autenticado.');
      }
    }
  }
}
