import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'

export default function Navbar({setFil, setCari}) {
    // const {id} = useParams()
    // console.log(id, "id n")
    const [move, setMove] = useState("")
    const ganti = async () => {
        return window.location.pathname;
    }
    // console.log(move)

    useEffect(()=> {
        ganti().then((result) => {
            setMove(result)
        })
    }, [])

  return (
    <div className='relative'>
        <nav className='fixed z-50 w-full bg-blue-800 flex justify-between h-16 items-stretch text-white'>
        <div className='self-center ml-16'>
            <Link to='/' className='text-2xl font-bold'>Hermovies</Link>
        </div>

        <div className='self-center mr-16 flex gap-10'>
            <ul className='flex justify-center space-x-4 text-sm font-medium'>
                <li className='p-2 hover:bg-blue-900 rounded-lg'>
                    <a href='/'>Home</a>
                </li>
                <li className='p-2 hover:bg-blue-900 rounded-lg'>
                    <a href='/movies'>Movies</a>
                </li>
                {move === '/movies' ? (
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
                ) : (
                    <li className='hidden'></li>
                )}
            </ul>

            {move === '/' ? (
                <span className='hidden'></span>
            ) : move === '/movies' ? (
                <div className='self-center flex gap-2 '>
                    <input type="text-sm" className='bg-white rounded-lg pl-3 pt-[2px] pb-[2px] text-sm text-gray-900 w-40 placeholder:italic placeholder:text-xs' placeholder='Search Movies ...'
                    onChange={({target}) => setCari(target.value)}
                    />
                    <BiSearch className=' h-auto' color='white' size={18}/>
                </div>
            ) : (
                <span className='hidden'></span>
            )}
            
        </div>
    </nav>
    </div>
  )
}
