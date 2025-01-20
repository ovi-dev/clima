
import axios from "axios";
import { Buscar, ElClima } from '../interfaces/tipe';

import { z } from "zod";
import { useState } from "react";

const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        feels_like: z.number(),
        temp_min: z.number(),
        temp_max: z.number(),
        humidity: z.number()
    })
})

export type Weather = z.infer<typeof Weather>

export default function useClima() {

    const [water, setwater] = useState({
        name: '',
        main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            humidity: 0
        }
    })
    


    const fetchClima = async ( buscar: Buscar ) => {
        const appId = process.env.NEXT_PUBLIC_API_URL
       
    try {
       const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${buscar.city},${buscar.country}&appid=${appId}`
         const { data } = await axios.get(geoUrl) 

            const lat = data[0].lat
            const lon = data[0].lon

            const climaUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`


            // castear el tipo de dato que se espera

            // const { data: clima } = await axios.get<ElClima>(climaUrl)
            // console.log(clima.main.temp_max);
            // console.log(clima.main.temp_min);
            // return clima

          

            const { data: clima } = await axios.get<ElClima>(climaUrl)
            const resultado = Weather.safeParse(clima)

            if (resultado.success) {
                setwater(resultado.data)
            }

            console.log(resultado)

        } catch (error) {
        console.log(error);
    }

    
    
    
}

return {
    water,
    fetchClima
}

}



