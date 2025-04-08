import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SoapGateway } from "../domain/gateways/soaps_gateways";
import { Soaps } from "../domain/models/soaps";

@Injectable({
    providedIn: 'root'
})
export class SoapService implements SoapGateway {
    private apiURL = 'http://3.81.193.22/soaps';

    constructor(private http: HttpClient) {}

    getAll(): Observable<Soaps[]> {
        return this.http.get<Soaps[]>(this.apiURL);
    }

    getById(id: number): Observable<Soaps> {
        return this.http.get<Soaps>(`${this.apiURL}/${id}`);
    }

    create(soap: Soaps): Observable<Soaps> {
        const token = localStorage.getItem('token'); 
        if (!token) {
            throw new Error("Token no encontrado");
        }
    
        console.log("Token enviado:", token);  
        
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.post<Soaps>(this.apiURL, soap, { headers });
    }
    

    update(id: number, soap: Soaps): Observable<Soaps> {
        const token = localStorage.getItem('token');  
        if (!token) {
            throw new Error("Token no encontrado");
        }

        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.put<Soaps>(`${this.apiURL}/${id}`, soap, { headers });
    }

    delete(id: number): Observable<void> {
        const token = localStorage.getItem('token'); 
        if (!token) {
            throw new Error("Token no encontrado");
        }

        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.delete<void>(`${this.apiURL}/${id}`, { headers });
    }
}
