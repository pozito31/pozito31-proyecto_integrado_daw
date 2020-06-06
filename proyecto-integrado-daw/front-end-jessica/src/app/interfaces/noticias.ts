export interface Noticias {
    id_noticia: number;
    titulo: string;
    descripcion: string;
    texto: string;
    directorio_noticia: string;
    imagen: string;
    usuarios_id_usuario: number;
}

export interface datosDevueltos  {
    status: string;
    data: Noticias[];
}