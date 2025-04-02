import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../infraestructure/users_service';
import { Users } from '../../../domain/models/users';
@Component({
  selector: 'app-conection-form',
  templateUrl: './conection-form.component.html',
  styleUrl: './conection-form.component.css'
})

export class ConectionFormComponent {
  codigoIdentificador: string = ''; 
  user: Users | null = null; 

  constructor(private userService: UserService, private router: Router) {}

 
  ngOnInit(): void {
    if (typeof window !== 'undefined') { 
      const storedUser = localStorage.getItem('new-user');
      if (storedUser) {
        this.user = JSON.parse(storedUser);
      }
    }
  }
  guardarDatos(): void {
    if (!this.user) {
      alert("No hay datos de usuario en localStorage.");
      return;
    }

    if (!this.codigoIdentificador) {
      alert("Por favor, ingresa el código identificador.");
      return;
    }
    this.user.Codigo_Identificador = String(this.codigoIdentificador); 
    this.userService.create(this.user).subscribe(
      response => {
        console.log("Usuario registrado exitosamente:", response);
        localStorage.removeItem('new-user'); 
        this.router.navigate(['/menu']); 
      },
      error => {
        alert('Error al registrar usuario');
        console.error("Error en el registro:", error);
      }
    );
  }
}