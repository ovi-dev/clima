export interface Country {
    code: string;
    name: string;
}

export interface Buscar {
    city: string;
    country: string;
}
export interface ElClima {
    name: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
    }
}
