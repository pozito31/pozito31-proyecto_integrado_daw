export interface Usuarios {
    id_usuario: number;
    nombre: string;
    apellidos: string;
    fecha_alta: string;
    usuario: string;
    password: string;
}

export interface datosDevueltos  {
    status: string;
    data: Usuarios[];
}
