import React from 'react'
import states from '@/constans/states'
const page = () => {
  const mystates = states.map(e =>(
    <div
    key={e.id}
  className='flex justify-center items-center border-b hover:bg-[#f2f2f2] border-b-[#eee]  p-4 '
  >
     <span
    className='w-4/12   uppercase'
    >{e.name}</span>
    <span
    className='w-4/12   uppercase'
    >0 DA</span>
    <span
    className='w-4/12   uppercase'
    >0 DA</span>
  </div>
  ))
  return (
    <div
    className='w-full px-5 mb-20'
    >
<h1
      className='mb-3 mt-7 font-bold capitalize  text-xl md:text-3xl'
>tarifs de livraison</h1>
<div
className='w-full'
>
  <div
  className='flex justify-center items-center bg-[#f2f2f2] p-4 '
  >
    <span
    className='w-4/12 font-[600]  uppercase'
    >wilaya</span>
    <span
    className='w-4/12 font-[600]  uppercase'
    >livraison à domicile</span>
    <span
    className='w-4/12 font-[600]  uppercase'
    >livraison au bureau</span>
  </div>
  {mystates}
</div>
</div>
  )
}

export default page