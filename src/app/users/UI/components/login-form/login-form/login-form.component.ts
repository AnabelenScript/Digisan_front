import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../../../domain/models/users';
import { UserService } from '../../../../infraestructure/users_service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  user: Users = {
    Nombre: "",
    Email: "",
    Contrasena: "",
    rol: 0,
    Codigo_Identificador: ""
  }

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  login(): void {
    this.userService.login(this.user.Email, this.user.Contrasena).subscribe(
      response => {
        console.log("Respuesta recibida: ", response);
  
        const token = response.token;
        const usuario = response.user;
        localStorage.setItem('token', token);
        localStorage.setItem('loggedUser', JSON.stringify(usuario));
        this.router.navigate(["/dashboard"]);
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Error de autenticación',
          text: 'Credenciales incorrectas o usuario no encontrado',
          confirmButtonText: 'Intentar de nuevo',
          background: '#fff',
          customClass: {
            popup: 'mi-alerta',
            title: 'mi-titulo',
            confirmButton: 'mi-boton'
          }
        });        
        console.error("Error en login: ", error);
      }
    );
  }

  register(): void {
    localStorage.setItem('new-user', JSON.stringify(this.user));
    this.router.navigate(['/connection']); 
  }
}
