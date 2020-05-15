export interface Noticias {
    id_noticia: number;
    descripcion: string;
    estado: string;
    directorio_noticia: string;
    usuarios_id_usuario: number;
}

export interface datosDevueltos  {
    status: string;
    data: Noticias[];
}