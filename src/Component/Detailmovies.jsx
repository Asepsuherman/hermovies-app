import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Detailmovies() {
  const {id} = useParams()
  const [tampungdata, setTampungdata] = useState({});
  console.log(tampungdata, "data")

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
    <div className='p-16 bg-gray-900 text-gray-200'>
      <div className='p-6 lg:flex justify-evenly lg:space-y-0 space-y-4'>
        <div className='m-auto bg-cover bg-center bg-no-repeat rounded-lg border border-gray-700 h-80 w-52' style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${tampungdata.poster_path}')`}}></div>
        <div className='m-auto grid lg:flex border border-gray-700 rounded-lg  gap-4 p-2 h-auto lg:h-80'>
          <div className='p-4 lg:w-96'>
            <p>Title : {tampungdata.title}</p>
            <p>Id : {tampungdata.id}</p>
            <p>Rating : {tampungdata.vote_average}</p>
            <p>Popularity : {tampungdata.popularity}</p>
            <p>Release : {tampungdata.release_date}</p>
            <p>Status : {tampungdata.status}</p>
            <p>Language : {tampungdata.spoken_languages[0].name}</p>
            <p>Production Companies : {tampungdata.production_companies[0].name}</p>
            <p>Production Countries : {tampungdata.production_countries[0].name}</p>
          </div>

          <hr className='border border-gray-700 w-[415px] mx-auto lg:hidden'/>

          <div className='p-4 lg:w-80 grid gap-4 text-justify lg:text-start'>
            <div>
              <p>Overview :</p>
              <p>{tampungdata.overview}</p>
            </div>

            <hr className='border border-gray-700 lg:hidden '/>
            
            <div className=''>
              <a href={tampungdata.homepage} className='p-1 px-2 rounded-md bg-blue-700 hover:bg-blue-800'>Homepage</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )}
}



// {/* <div className='border border-blue-600'>
// <p>Id : {tampungdata.id}</p>
// <h1>Title : {tampungdata.title}</h1>
// <p>Rating : {tampungdata.vote_average}</p>
// <p>Release : {tampungdata?.release_date}</p>
// <p>Popularity : {tampungdata?.popularity}</p>
// <p>Overview : {tampungdata?.overview}</p>
// </div> */}


// {/* <div className=' border border-white lg:flex flex-rows gap-4 p-4'>
      
// <div style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${tampungdata.poster_path}')`}} 
// className={'rounded-sm h-96 w-1/2 lg:w-1/4 shadow-sm shadow-gray-500 bg-cover bg-center bg-no-repeat border border-white'}></div>

// <div className='border border-white w-1/2'>
//   <h3>Title : {tampungdata?.title}</h3>
//   <h3>Id : {tampungdata?.id}</h3>
//   <h3>Rating : {tampungdata?.vote_average}</h3>
//   <h3>Release : {tampungdata?.release_date}</h3>
//   <h3>Popularity : {tampungdata?.popularity}</h3>
//   <h3>Overview : {tampungdata?.overview}</h3>
// </div>

// </div> */}