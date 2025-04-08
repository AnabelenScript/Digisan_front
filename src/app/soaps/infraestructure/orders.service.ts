import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Order } from "../domain/models/order";
import { OrderGateway } from "../domain/gateways/orders_gateways";

@Injectable({
    providedIn: 'root'
})

export class OrderService implements OrderGateway {
    constructor(private httpClient: HttpClient) {}
    private apiURL = 'http://3.81.193.22/order';

    create(order: Order): Observable<Order>{
       return this.httpClient.post<Order>(`${this.apiURL}/servo`, order)
    }

    createLiquid(order: Order): Observable<Order>{
        return this.httpClient.post<Order>(`${this.apiURL}/bomba`, order)
     }
}
