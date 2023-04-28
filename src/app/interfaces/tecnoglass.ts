export interface orden{
    ID?: number | null,
    ID_CLIENTE?: number | null, 
    ID_ITEM?: number | null,
    FECHA?: Date | null,
    ESTADO?:string | null
}

export interface cliente{
    ID?: number | null,
    NOMBRE?: string | null,
    APELLIDO?: string | null,
    DIRECCION?:string | null,
    TELEFONO?:number | null,
    NACIONALIDAD?:string | null,
    CORREO?:string | null,
    F_CREA?:Date | null
}

export interface item{
    ID?: number | null,
    DESCRIP?: string | null,
    ANCHO?: number | null,
    LARGO?: number | null,
    FECHA?:Date | null
}

export interface solicitud{
    ID?: number | null,
    NOMBRE?: string | null,
    APELLIDO?: string | null,
    DESCRIP?: string | null,
    ANCHO?: number | null,
    LARGO?: number | null,
    ESTADO?:string | null
}