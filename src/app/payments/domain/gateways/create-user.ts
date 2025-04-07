import { Users } from "../models/user";
import { Observable } from "rxjs";

export abstract class UserGateway {
    abstract create(users: Users): Observable<Users>;
}