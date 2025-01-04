import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Menu from './Menu';
import Search from './Search';

const Header = () => {
  return (
<header
className='w-full flex px-7 py-2 min-h-[4rem] items-center border-b border-b-[#e5e7eb]'
>
   <Menu />
    <Link
    href={'/'}
    className='flex items-center'
    >
    <Image 
    src={'/logo.png'}
    width={40}
    height={30}
    alt='logo'
    className='mr-3'
    />
    <span
    className='mr-5 md:text-[20px] font-bold capitalize'
    >magic soft</span>
    </Link>
    <Search show={false} />
</header>
)
}

export default Header