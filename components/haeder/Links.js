import Link from 'next/link'
import React from 'react'
import catégories from '@/constans/catégories'
import { usePathname } from 'next/navigation';
import SocialNetworks from '../social networks/SocialNetworks';

const Links = ({hide}) => {
    const router = usePathname()
        
    const mylinks =  [
        {
        name:"accueil",
        link: "/"
    },
    {
        name: "catégories",
        link: "/categories"
    },
    {
        name: "État de commande",
        link: "/commande"
    },
    {
        name: "tarifs de livraison",
        link: "/livraison"
    },
    {
        name: "contactez-nous",
        link: "/contact"
    }   
]
    .map(e =>(
        <Link
        onClick={hide}
        key={e.name}
        href={`${e.link}`}
        className={`w-full ${router == e.link && "font-bold"} hover:font-bold hover:bg-[#f3f4f6]   py-2  mb-1 md:mb-3 sm:mb-2 sm:text-xl px-3 capitalize ` }
        >{e.name}</Link>
    ))
    const mycategories = catégories.map(e =>(
        <Link
        onClick={hide}
        key={e.name}
        className='w-6/12 p-1 my-1  hover:bg-[#f3f4f6]'
        href={`/categories/${e.name}`}>
            {e.name}
        </Link>
    ))
  return (
    <div
    className='flex flex-col items-start w-full px-2 mt-5   '
    >
{mylinks}
<div
className='border-b border-b-[#3a3b3b55] w-full my-2 '
></div>
<strong
className='text-xl md:text-2xl capitalize'
>catégories</strong>
<div
className='flex flex-wrap w-full items-center px-2 justify-center my-3'
>
{mycategories}
</div>
<div
className='border-b border-b-[#3a3b3b55] w-full my-2 '
></div>
<SocialNetworks />
    </div>
  )
}

export default Links