import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataMP

 } from '../domain/models/DataMP';
@Injectable({
  providedIn: 'root'
})
export class PaymentsMpService {
  
  private apiUrl = 'http://localhost:8000/'

  constructor(private http: HttpClient) { }

  pay(data: DataMP): Observable<any> {
    return this.http.post(`${this.apiUrl}pay`, data)
  }

  updateRolUser(): void {    
    localStorage.setItem("paid", "true")
  }
}