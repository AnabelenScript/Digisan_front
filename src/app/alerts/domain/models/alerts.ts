import { Time } from "@angular/common"

export interface Alerts {
    id?: number
	id_lectura: number
	estado: string
	fecha_creacion: Time
	idrol: number
	codigo_identificador: number
    tipo: boolean
}