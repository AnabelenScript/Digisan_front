import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../infraestructure/users_service';
import { Users } from '../../../domain/models/users';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  client: Users = {
    Nombre: '',
    Email: '',
    Contrasena: '',
    rol: 0, 
    Codigo_Identificador: ''
  };

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const loggedUser = localStorage.getItem('loggedUser');
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      this.client.Codigo_Identificador = user.Codigo_Identificador;
    } else {
      alert('No hay datos de usuario logueado.');
      this.router.navigate(['/login']); 
    }
  }

  registerClient(): void {
    if (!this.client.Nombre || !this.client.Email || !this.client.Contrasena) {
      alert('Por favor completa todos los campos.');
      return;
    }

    this.userService.createClient(this.client).subscribe(
      response => {
        alert('Cliente registrado exitosamente.');
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error('Error registrando el cliente:', error);
        alert('Error registrando el cliente.');
      }
    );
  }
}