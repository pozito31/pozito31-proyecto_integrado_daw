export interface Roles {
    id_roles: number;
    estado: string;
    tipo: string;
    nombre: string;
    situacion: string;
    usuarios_id_usuario: number;
}

export interface datosDevueltos  {
    status: string;
    data: Roles[];
}