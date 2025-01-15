import React from 'react'
import Formulario from './Formulario'

const Clima = () => {
  return (
    <div className='container mx-auto '>

      <h1 className=' text-white text-3xl font-bold text-center mt-9'>
        Buscador de Clima
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center text-center'>
        <p>
        <Formulario/>

        </p>
        <p>2</p>
      </div>


    </div>
  )
}

export default Clima
