import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const time = new Date().getFullYear()
    const footerlinks = [
        {
            titel: "boutique",
            links: [
                {
                    name: "contactez-nous",
                    link: "/contact"
                },
                {
                    name: "à propos",
                    link: "/about"
                },
                {
                    name: "FAQs",
                    link: "/faq"
                }
            ]
        },
        {
            titel: "livraison",
            links: [
                {
                    name: "tarifs de livraison",
                    link: "/livraison"
                }
            ]
        }
    ].map(e =>(
        <div
        key={e.titel}
        className='w-full sm:w-4/12 flex flex-col items-center justify-center my-2 sm:my-0'
        >
            <strong
            className='uppercase text-[#0007] flex mb-2'
            >{e.titel}</strong>
            <div
            className='flex flex-col items-center '
            >
                {e.links.map(e=>(
                    <Link
                    className='my-0.5 capitalize'
                    key={e.name}
                    href={e.link}
                    >{e.name}</Link>
                ))}
            </div>
        </div>
    ))
  return (
    <>
    <footer
    className='border-t  p-3 border-t-[#ff007555] w-[98%] mx-auto flex flex-col sm:flex-row sm:justify-center items-center sm:items-start'
    >
      <div
      className='flex flex-col items-center my-2 sm:my-0 w-full sm:w-4/12'
      >
        <Image
        src={'/logo.png'}
        alt='logo-footer'
        width={50}
        height={50}
        className='mb-2'
        />
        <span
        className='font-bold capitalize text-xl'
        >magic Soft</span>
      </div>
      {footerlinks}
    </footer>
    <p
    className='text-center px-7 mt-2 mb-4 capitalize text-[#000a]'
    >Tous les droits sont réservés © {time} - yacine soft</p>
        </>
  )
}

export default Footer