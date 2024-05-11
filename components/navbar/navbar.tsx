
import React from 'react'
import Link from 'next/link'
import ActiveLink from '@/active-link/activeLink'




export const Navbar = () => {
   
    const navItems = [
        {pathname : '/pricing', text: 'Pricing'},
        {pathname : '/about', text: 'About'},
        {pathname : '/contact', text: 'Contact'}
    ]

  return (
    <nav className='flex justify-between bg-blue-800 bg-opacity-30 p-2 px-10 m-2 rounded'>
        <Link className='flex items-center gap-1' href='/'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M6.906.664a1.749 1.749 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Zm1.25 1.171a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195Z"></path></svg>
            Home
        </Link>
        <div className='flex gap-4'>
            {navItems.map(navItems=>(
               <ActiveLink key={navItems.text} pathname={navItems.pathname} text={navItems.text}/>
            ))}
        </div>
    </nav>
  )
}
