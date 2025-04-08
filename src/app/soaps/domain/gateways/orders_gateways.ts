import { Order } from "../models/order";
import { Observable } from "rxjs";

export abstract class OrderGateway{
    abstract create(orders: Order): Observable<Order>;
    abstract createLiquid(orders: Order): Observable<Order>
}
