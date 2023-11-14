import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className=' bg-slate-600 flex justify-between item-center px-8 py-3'>
      <Link href={'/'} className='font-bold text-xl text-white flex items-center'>Sas Crud</Link>
      <Link href={'/addTopic'} className='font-bold text-white p-2 hover:bg-slate-500 bg-black'>Add Topic</Link>
    </nav>
  )
}

export default Navbar