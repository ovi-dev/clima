import { Weather } from '@/hooks/useClima'
import React from 'react'


interface WaterProps {
    water: Weather

}

const Water = ({water}: WaterProps) => {
  return (
    <div>
      <h1>Clima de </h1>
    </div>
  )
}

export default Water
