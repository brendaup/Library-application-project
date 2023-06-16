export interface BookI{
    id: string;
    title: string;
    genre: genReType;
    author: string;
    price: string;
    year: number;
    image: string;
    synopsis: string;
    createbyme?: boolean;
}

export type genReType = "Novela romántica"
| "Sequi" 
| "Misterio"
| "Autobiográfico"
| "Evolucionismo"
| "Novela Contemporánea"
| "Novela negra"
| "Novela erótica"
| "Fantasía"
| "Novela Histórica"
| "Narrativa extranjera"