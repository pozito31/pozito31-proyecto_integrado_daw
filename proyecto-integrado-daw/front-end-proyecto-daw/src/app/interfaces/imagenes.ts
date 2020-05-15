export interface Imagenes {
    id_imagen: number;
    descripcion: string;
    directorio_foto: string;
    noticias_id_noticia: number;
    created_at: Date;
    updated_at: Date;
}

export interface datosDevueltos  {
    status: string;
    data: Imagenes[];
}