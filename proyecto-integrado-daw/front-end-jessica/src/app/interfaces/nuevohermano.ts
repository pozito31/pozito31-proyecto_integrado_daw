export interface Nuevohermano {
    id_nuevohermano: number;
    nombre: string;
    primerapellido: string;
    segundoapellido: string;
    dni: string;
    correoelectronico: string;
    nacimiento: string;
    telefono: string;
    foto: string;
}

export interface datosDevueltos  {
    status: string;
    data: Nuevohermano[];
}