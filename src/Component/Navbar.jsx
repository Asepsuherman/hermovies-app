import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({setFil}) {

  return (
    <div>
        <nav className='bg-blue-800 flex justify-between h-16 items-stretch text-white'>
        <div className='self-center ml-16'>
            <Link to='/' className='text-2xl font-bold'>Hermovies</Link>
        </div>

        <div className='self-center mr-16'>
            <ul className='flex justify-center space-x-4 text-sm font-medium'>
                <li className='p-2 hover:bg-blue-900 rounded-lg'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='p-2 hover:bg-blue-900 rounded-lg'>
                    <Link to='/movies'>Movies</Link>
                </li>
                <li className=''>
                    <div className=''>
                        <select className='bg-blue-800 text-sm p-2 hover:bg-blue-900 rounded-lg cursor-pointer' 
                        onChange={(e) => setFil(e.target.value)}>
                            <option hidden>Filters</option>
                            <option value='Rating' className='bg-white text-black'>Rating</option>
                            <option value='Release' className='bg-white text-black'>Release</option>
                            <option value='Popularity' className='bg-white text-black'>Popularity</option>
                        </select>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    </div>
  )
}
