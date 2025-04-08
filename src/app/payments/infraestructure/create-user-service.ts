import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from "../domain/models/user";
import { HttpClient } from "@angular/common/http";
import { UserGateway } from "../domain/gateways/create-user";

@Injectable({
    providedIn: 'root'
})

export class UserService implements UserGateway {
    private apiURL = 'http://3.81.193.22'
    constructor(private http: HttpClient) {}

    create(iusers: Users): Observable<Users>{
        return this.http.post<Users>(`${this.apiURL}/users`, iusers)
    }
    
}