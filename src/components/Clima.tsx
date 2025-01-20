'use client'

import React from 'react'
import Formulario from './Formulario'
import useClima from '@/hooks/useClima'
import Water from './Water'

const Clima = () => {

      const {water, fetchClima} = useClima()

  return (


    <div className='container mx-auto '>

      <h1 className=' text-white text-3xl font-bold text-center mt-9'>
        Buscador de Clima
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center text-center'>
        <p>
        <Formulario
        fetchClima = {fetchClima}
        />
        </p>
        
        <Water
        water = {water}
        />
      </div>


    </div>
  )
}

export default Clima
