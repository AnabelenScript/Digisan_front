import { Soaps } from "../models/soaps";
import { Observable } from "rxjs";

export abstract class SoapGateway {
    abstract getAll(): Observable<Soaps[]>;
    abstract delete(id: number): Observable<void>;
    abstract create(soaps: Soaps): Observable<Soaps>;
    abstract update(id: number, isoap: Soaps): Observable<Soaps>;
}