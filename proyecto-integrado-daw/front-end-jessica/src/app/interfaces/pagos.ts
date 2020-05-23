export interface Pagos {
    id_pago: number;
    cantidad: number;
    realizar_pago: number;
    fecha_transaccion: string;
    usuarios_id_usuario: number;
}

export interface datosDevueltos  {
    status: string;
    data: Pagos[];
}