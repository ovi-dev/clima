import { Weather } from '@/hooks/useClima'
import { FormatoTemperatura } from '@/utils/temperatura'
import React from 'react'


interface WaterProps {
    water: Weather

}

const Water = ({water}: WaterProps) => {
  return (
    <div className='container mx-auto bg-slate-50 p-4 rounded-md shadow-md text-center text-gray-950 mt-20'>
      <h1 className='uppercase text-black text-3xl'>el tiempo </h1>
      <h1 className='text-neutral-900 text-2xl'> <span>{water.name} </span></h1>
      <p className='text-neutral-900 text-3xl'>{FormatoTemperatura( water.main.temp)}&deg;C</p>
      <div>
        <p className='text-neutral-900 text-xl'> Sensacion Termica <span>{ FormatoTemperatura(water.main.feels_like)}</span>&deg;C</p>
        <p className='text-neutral-900 text-xl'> Humedad <span>{water.main.humidity}</span>%</p>
      </div>

      <div className='grid grid-cols-2 gap-4'>
      <p className=' p-2'>  Maxima <span>{ FormatoTemperatura(water.main.temp_max)}</span>&deg;C</p>
      <p>  Minima <span>{FormatoTemperatura(water.main.temp_min)}</span>&deg;C</p>

      </div>
      
    </div>
  )
}

export default Water


