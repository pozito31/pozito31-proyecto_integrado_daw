export interface Contacto {
    id_contacto: number;
    nombre: string;
    email: string;
    mensaje: string;
}

export interface datosDevueltos  {
    status: string;
    data: Contacto[];
}
