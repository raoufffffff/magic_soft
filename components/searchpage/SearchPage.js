// SearchPage.js
"use client"
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import items from '@/constans/items'
import ItemCard from '../itemCard/ItemCard'

const SearchPageContent = () => {
  const search = useSearchParams()
  const searchTerm = search.get("search")?.toUpperCase().replace(" ", "") || ""

  const searchItems = items.filter(e => e.name.toUpperCase().replace(" ", "").includes(searchTerm))
    .map(e => <ItemCard item={e} key={e.name} />)

  return (
    <div className='w-full'>
      <h1 className='mb-3 mt-7 font-bold capitalize text-xl md:text-3xl'>
        Résultats de recherche pour "{search.get("search")}"
      </h1>
      <div className='w-full flex py-10 flex-wrap justify-evenly mt-3 items-center'>
        {searchItems}
      </div>
    </div>
  )
}

const SearchPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <SearchPageContent />
  </Suspense>
)

export default SearchPage
