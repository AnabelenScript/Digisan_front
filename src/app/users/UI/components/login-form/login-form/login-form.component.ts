import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../../../domain/models/users';
import { UserService } from '../../../../infraestructure/users_service';

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
    Id_Rol: 0
  }

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  login(): void {
    console.log("entre a login con el siguiente usuario: ", this.user);

    this.userService.login(this.user.Email, this.user.Contrasena).subscribe(
      response => {
        console.log("Respuesta recibida: ", response);

        const token = response.token;
        const usuario = response.user;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(usuario));
        if (usuario.Id_Rol === 1) {
          this.router.navigate(["/menu"]);
        } else if (usuario.Id_Rol === 2) {
          this.router.navigate(["/dashboard"]);
        } else {
          alert("Eres un admin");
        }
      },
      error => {
        alert('Credenciales incorrectas');
        console.error("Error en login: ", error);
      }
    );
  }

  register(): void {
    console.log("entre a registro con el user:", this.user);

    this.userService.create(this.user).subscribe(
      response => {
        console.log("Registro exitoso: ", response);
        this.login(); 
      },
      error => {
        alert('Error en registro');
        console.error("Error en registro: ", error);
      }
    );
  }
}
