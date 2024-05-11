'use client'
import React from 'react'
import Link from 'next/link'
import './stylelink.css'
import { usePathname } from 'next/navigation'

interface itemsLink {
  pathname : string,
  text : string
}
const ActiveLink = ({pathname, text}:itemsLink) => {
  const path = usePathname()
  console.log(path)
  return (
    <Link className={`link ${path === pathname && 'active-link'}`} href={pathname}>{text}</Link>
  )
}

export default ActiveLink