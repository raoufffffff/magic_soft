import React from 'react'
import catégories from '@/constans/catégories'
import CategoriCard from '@/components/categoriCard/CategoriCard'
const page = () => {
  const mycat = catégories.map(e => <CategoriCard e={e} key={e.name} />)
  return (
    <div
    className='w-full px-5 mb-20'
    >
<h1
      className='mb-3 mt-7 font-bold capitalize  text-xl md:text-3xl'
>catégories</h1>
    <div
    className='w-full flex flex-wrap my-5 items-center'
    >
      {mycat}
    </div>
      </div>
  )
}

export default page