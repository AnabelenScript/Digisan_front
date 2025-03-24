import { Users } from "../models/users";
import { Observable } from "rxjs";

export abstract class UserGateway {
    abstract getAll(): Observable<Users[]>;
    abstract delete(id: number): Observable<void>;
    abstract create(users: Users): Observable<Users>;
    abstract update(id: number, iuser: Users): Observable<Users>;
    abstract login(Email: string, Contraseña: string): Observable<{ token: string; user: any }>;
}