import React from 'react'

interface Error {
    children: React.ReactNode
}

const Alerta = ({children} :Error) => {
  return (
    <div>
        <div className='bg-red-500 text-white p-3 rounded-md text-center'>
            {children}
        </div>
    </div>
  )
}

export default Alerta
