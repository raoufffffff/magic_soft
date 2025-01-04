import TypeItems from '@/components/TypeItems/TypeItems'
import React from 'react'

const page = ({params}) => {
  const categotie = params.id.replace(/%20/g, " ")
  return (
    <div
    className='w-full px-5'
    >
      <h1
      className='mt-3 font-bold text-xl md:text-2xl'
      >
      {categotie}
      </h1>
      <TypeItems name={categotie} />
      </div>
  )
}

export default page