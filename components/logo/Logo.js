import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
   <div
           className='w-full mb-5 sm:mb-3  flex   sm:flex-col items-center mt-5 sm:mt-9'
           >
               <Image 
               src={'/logo.png'}
               alt='logo-2'
               width={90}
               height={90}
               className='w-12 sm:w-24'
               />
               <span
               className='font-[700] text-xl sm:text-2xl mx-3 sm:mt-3 capitalize'
               >magic soft</span>
           </div>
  )
}

export default Logo