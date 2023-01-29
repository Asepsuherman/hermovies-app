import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

export default function Detailmovies() {
  const {id} = useParams()
  const [tampungdata, setTampungdata] = useState({});
  // console.log(tampungdata, "data")

  const getdataAPI = async () => {
    const movies = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/${id}?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`)
    // return movies;
    return movies.data;
  }

  useEffect(()=> {
    getdataAPI().then((results) => {
      setTampungdata(results);
  })
  }, [])

if(JSON.stringify(tampungdata) === '{}'){
// if(tampungdata === ''){
  return (
    <h1>Loading.....</h1>
  )
}else{
  return (
    <div className='pt-32 pr-16 pl-16 pb-16 bg-gray-900 text-gray-200'>
      <div className='p-6 lg:flex justify-evenly lg:space-y-0 space-y-4'>
        <div className='m-auto bg-cover bg-center bg-no-repeat rounded-lg border border-gray-700 h-80 w-52' style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${tampungdata.poster_path}')`}}></div>
        <div className='p-6 m-auto grid lg:flex border border-gray-700 rounded-lg gap-4 h-auto lg:h-80'>
          <div className=''>
            <div className='lg:w-96'>
              <p>Title : {tampungdata.title}</p>
              <p>Id : {tampungdata.id}</p>
              <p>Rating : {tampungdata.vote_average}</p>
              <p>Popularity : {tampungdata.popularity}</p>
              <p>Release : {tampungdata.release_date}</p>
              <p>Status : {tampungdata.status}</p>
              <p>Language : {tampungdata.spoken_languages[0].name}</p>
              <p>Production Companies : {tampungdata.production_companies.name}</p>
              <p>Production Countries : {tampungdata.production_countries[0].name}</p>
            </div>
            <div className='gap-4 hidden lg:flex mt-6'>
              <a href='/movies' className='h-max p-1 px-2 rounded-md bg-red-700 hover:bg-red-800'>Back</a>
              <a href={tampungdata.homepage} className='h-max p-1 px-2 rounded-md bg-blue-700 hover:bg-blue-800'>Homepage</a>
            </div>
          </div>

          <hr className='border border-gray-700 w-[395px] md:w-full mx-auto lg:hidden'/>

          <div className=' grid gap-4 text-justify lg:text-start'>
            <div className='lg:w-80'>
              <p>Overview :</p>
              <p>{tampungdata.overview}</p>
            </div>
            <hr className='border border-gray-700 w-[395px] md:w-full mx-auto lg:hidden '/>
            <div className=' lg:w-96 flex gap-4 lg:hidden'>
              <a href='/movies' className='h-max p-1 px-2 rounded-md bg-red-700 hover:bg-red-800'>Back</a>
              <a href={tampungdata.homepage} className='h-max p-1 px-2 rounded-md bg-blue-700 hover:bg-blue-800'>Homepage</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )}
}