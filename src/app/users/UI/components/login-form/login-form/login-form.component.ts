import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../../../domain/models/users';
import { UserService } from '../../../../infraestructure/users_service';
import { log } from 'console';

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

  login(): void{
    console.log("entre a login con el siguiente usuario: ", this.user);
    
    this.userService.login(this.user.Email, this.user.Contrasena).subscribe(
      response => {
        console.log("respuestita" + response);
        
        this.router.navigate(["/menu"])
      },
      error => {
        alert('ñopi')
        console.error("error" + error);
        
      }
    )
  }


  register():void {
    console.log("entre a registro con el user:", this.user);

    this.userService.create(this.user).subscribe(
      response => {
        console.log("oliwiRegistro");
        console.log("respuestita" + response);
        
        this.login()
      },
      error => {
        alert('ñopi')
        console.error("errorsito ito eto e paraa compronbar " + error);
      }
    )
  }

}
