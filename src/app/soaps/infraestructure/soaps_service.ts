import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { SoapGateway } from "../domain/gateways/soaps_gateways";
import { Soaps } from "../domain/models/soaps";

@Injectable({
    providedIn: 'root'
})
export class SoapService implements SoapGateway {
    private apiURL = 'http://54.85.123.137/soaps';

    constructor(private http: HttpClient) {}

    getAll(): Observable<Soaps[]> {
        return this.http.get<Soaps[]>(this.apiURL);
    }

    getById(id: number): Observable<Soaps> {
        return this.http.get<Soaps>(`${this.apiURL}/${id}`);
    }

    create(soap: Soaps): Observable<Soaps> {
        return this.http.post<Soaps>(this.apiURL, soap);
    }

    update(id: number, soap: Soaps): Observable<Soaps> {
        return this.http.put<Soaps>(`${this.apiURL}/${id}`, soap);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiURL}/${id}`);
    }
}
