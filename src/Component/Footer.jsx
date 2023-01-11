import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-blue-800 p-6 flex justify-between font-medium text-md text-white bottom-0 w-full'>
        <h1 className='font-bold text-xl'>Hermovies</h1>
        <span className=''>Asep Suherman | © 2023.</span>
        <div className='space-x-3'>
            <Link className='hover:underline'>Email</Link>
            <Link className='hover:underline'>Github</Link>
            <Link className='hover:underline'>Instagram</Link>
        </div>
    </footer>
  )
}
