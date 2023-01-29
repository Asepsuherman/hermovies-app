import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* div atas untuk bg */}
      <div className='pt-32 pr-16 pl-16 pb-16 bg-gray-900 text-white'>
        <div className='p-16'>
          <h1 className='text-3xl font-bold tracking-tight text-center'>Welcome, let's find your favorite movie here</h1>
          <p className='pt-4 text-center'>Welcome to the hermovies website, you can find your favorite movies here. Our powerful search engine allows you to easily find movies by title, genre, year, actor or director. You can also filter search results by rating, popularity and more to narrow down your choices. Whether you want a classic romantic comedy, a suspenseful thriller, or a heartwarming family drama, we've got you covered. So grab some popcorn and dive into the world of movies with us!</p>
          <div className='relative mt-28'>
            <a href='/movies' className='p-1 px-2 rounded-md bg-blue-800 hover:bg-blue-900 absolute bottom-0 right-0'>Get Started</a>
          </div>
        </div>
      </div>
    </div>
  )
}
