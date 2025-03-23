import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from "../domain/models/users";
import { HttpClient } from "@angular/common/http";
import { UserGateway } from "../domain/gateways/users_gateways";


@Injectable({
    providedIn: 'root'
})

export class UserService implements UserGateway {
    private apiURL = 'http://localhost:8000'
    constructor(private http: HttpClient) {}

    getAll(): Observable<Users[]>{
        return this.http.get<Users[]>(this.apiURL)
    }

    delete(id: number): Observable<void>{
        return this.http.delete<void>(`${this.apiURL}/users/${id}`)
    }

    create(iusers: Users): Observable<Users>{
        return this.http.post<Users>(`${this.apiURL}/users`, iusers)
    }

    update(id: number, iusers: Users): Observable<Users>{
        return this.http.put<Users>(`${this.apiURL}/users/${id}`, iusers)
    }

    login(Email: string, Contrasena: string): Observable<{ token: string }> {
        console.log("eto etoi loh¡gueando" + { Email: Email, Contraseña: Contrasena });
        return this.http.post<{ token: string }>(`${this.apiURL}/login`, { Email: Email, Contraseña: Contrasena });
    }

   
}