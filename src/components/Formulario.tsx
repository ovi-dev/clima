import { countries } from '@/data/pais'
import React from 'react'

const Formulario = () => {
  return (
    <>
<form 
className='flex flex-col gap-8 mt-10'
action="">


    <div className='flex flex-col gap-4'>

        <label 
        className='text-white font-bold'
        htmlFor="city">Ciudad</label>
        <input 
        className='rounded-md p-2'
        id='city'
        type="text"
        name='city' 
        placeholder='Escribe el nombre de la ciudad'
        />
    </div>
      

    <div className='flex flex-col gap-4'>
        <label 
        className='text-white font-bold'
        htmlFor="country">País</label>
        <select 
        className='rounded-md p-2'
        name="country" id="country">
            <option 
            className='text-center'
            value="">-- Seleccione un País --</option>
            {countries.map(countries => (
                <option key={countries.code} value={countries.code}>{countries.name}</option>
            ))}
        </select>
        
    </div>

        <input 
        type="submit"
        value={'Buscar Clima'}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        />
    </form>
    </>
  )
}

export default Formulario
