import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
// import Detailmovies from '../Component/Detailmovies'
import { Link } from 'react-router-dom'

export default function Movies({fil, setpop}) {
    

    const [popularMovies, setPopularMovies] = useState([]);
    const getmovieList = async () => {
        const movies = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/popular?page=1&api_key=${process.env.REACT_APP_APIKEY}`);
        return movies.data.results;
    }

    useEffect(() => {

        if(fil === "Rating"){
            getmovieList().then((results) => {
                setPopularMovies(results.sort((a,b) => a.vote_average < b.vote_average ? 1 : -1));
            })
        }
        else if(fil === "Release"){
            getmovieList().then((results) => {
                setPopularMovies(results.sort((a,b) => a.release_date < b.release_date ? 1 : -1))
            })
        }
        else if(fil === "Popularity"){
            getmovieList().then((results) => {
                setPopularMovies(results.sort((a,b) => a.popularity < b.popularity ? 1 : -1));
            })
        }
        else{
            getmovieList().then((results) => {
                setPopularMovies(results);
            })
        }
    }, [fil])


    // console.log("ini data", popularMovies)
    // console.log(fil)

    
    const MoviesMap = () => {
        return popularMovies.map((movie, i) => {
            return (
            <div key={i.toString()} className={'relative block overflow-hidden rounded-lg h-48 w-56 lg:h-60 lg:w-72  shadow-sm shadow-gray-600 bg-cover bg-center bg-no-repeat'}
            style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.poster_path}')`}}
            >
                <div className='absolute right-3 top-3 z-10 inline-flex items-center rounded-full bg-orange-400 px-3 py-1 text-xs font-semibold text-white'>
                    <h3 className=''>{movie.vote_average}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-3">
                        <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                    </svg>
                </div>


                <div className='relative bg-black bg-opacity-60 p-4 pt-24 lg:pt-36 pb-12 space-y-1 text-white h-auto'>
                    <h3 className='text-xs lg:text-sm tracking-tight font-bold underline'>{movie.title}</h3>
                    <p className='text-[10px] lg:text-xs'>Popularity: {movie.popularity}</p>
                    <p className='text-[10px] lg:text-xs'>Release: {movie.release_date}</p>
                </div>
            {/* <Button movie={movie}/> */}
            <Link to={'/movies/'+movie.id} className='inline-flex items-center absolute bottom-3 right-3 px-2 p-1 text-[10px] lg:text-xs font-normal lg:font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-blue-300'>View Detail</Link>
            </div>
            )
        })
    }
    
  return (
    <div className='p-16 bg-gray-900 h-[100%]'>
        <div className='grid text-white'>
            <span className='text-md font-semibold'>Movies by : {fil}</span>
            <span className='border rounded-full border-white w-full mt-2 opacity-50'></span>
        </div>
        <div className='flex flex-wrap justify-center lg:justify-start-end gap-6 mt-16'>
            <MoviesMap/>
        </div>
    </div>
  )
}
