import React from 'react'
import items from '@/constans/items'
import ItemCard from '../itemCard/ItemCard'
const BestItem = () => {
    const mybestItems = items.filter(e => e.best).map((e, i) => <ItemCard key={i} item={e} />)
  return (
    <div
    className='w-full flex flex-wrap justify-evenly mt-3 items-center'
    >
        {mybestItems}
    </div>
  )
}

export default BestItem