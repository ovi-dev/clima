"use client"

import { countries } from '@/data/pais'
import { Buscar } from '@/interfaces/tipe'
import { ChangeEvent, FormEvent, useState } from 'react'
import Alerta from './Alerta'

interface FormularioProps {
    fetchClima: ( buscar: Buscar ) => Promise<void>;
}

const Formulario = ({ fetchClima}: FormularioProps ) => {

    const [buscar, setbuscar] = useState<Buscar>(
        {
            city: '',
            country: ''
        }
    )
    const [alerta, setalerta] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(buscar).includes('')) {
            setalerta('Todos los campos son obligatorios')
            return
        }
        setalerta('')
        // Aquí puedes agregar la lógica para manejar el envío del formulario
        fetchClima(buscar)
    }

    return (
        <>
            <form
                className='flex flex-col gap-2 mt-8'
                action=""
                onSubmit={handleSubmit}
                >
                    { alerta && <Alerta>{alerta}</Alerta> }

                <div className='flex flex-col gap-4'>

                    <label
                        className='text-white font-bold text-lg '
                        htmlFor="city">Ciudad</label>
                    <input
                        className='rounded-md p-2 bg-transparent border-2 border-white m-2  text-white'
                        id='city'
                        type="text"
                        name='city'
                        placeholder='Escribe el nombre de la ciudad'
                        value={buscar.city}
                        onChange={(e) => setbuscar({ ...buscar, city: e.target.value } 

                        )
                        
                    }
                    />
                </div>


                <div className='flex flex-col gap-4'>
                    <label
                        className='text-white font-bold text-lg'
                        htmlFor="country">País</label>
                    <select
                        
                        className='rounded-md p-2'
                        name="country" 
                        id="country"
                        value={buscar.country}
                        onChange={(e) => setbuscar({ ...buscar, country: e.target.value })}
                        >
                        <option
                            className='text-center'
                            value="">-- Seleccione un País --</option>
                        {countries.map(countries => (
                            <option 
                            key={countries.code} 
                            value={countries.code}>{countries.name}</option>
                        ))}
                    </select>

                </div>

                <input
                    type="submit"
                    value={'Buscar Clima'}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-6'
                    onChange={(e) => e.preventDefault()}
                />
            </form>
        </>
    )
}

export default Formulario
