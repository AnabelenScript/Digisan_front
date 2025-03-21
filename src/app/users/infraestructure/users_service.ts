import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from "../domain/models/users";
import { HttpClient } from "@angular/common/http";
import { UserGateway } from "../domain/gateways/users_gateways";


@Injectable({
    providedIn: 'root'
})

export class UserService implements UserGateway {
    private apiURL = 'http://localhost:8080'
    constructor(private http: HttpClient) {}

    getAll(): Observable<Users[]>{
        return this.http.get<Users[]>(this.apiURL)
    }

    delete(id: number): Observable<void>{
        return this.http.delete<void>(`${this.apiURL}/${id}`)
    }

    create(iusers: Users): Observable<Users>{
        return this.http.post<Users>(`${this.apiURL}/users`, iusers)
    }

    update(id: number, iusers: Users): Observable<Users>{
        return this.http.put<Users>(`${this.apiURL}/${id}`, iusers)
    }

    login(Email: string, Contraseña: string): Observable<{ token: string }> {
        return this.http.post<{ token: string }>(`${this.apiURL}/login`, { Email, Contraseña });
    }

   
}