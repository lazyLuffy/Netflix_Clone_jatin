import axios from './axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Row.css'
function Row({title,fetchUrl,isBigRow=false}) {
    const baseURl = "https://image.tmdb.org/t/p/original/";
    console.log(fetchUrl,"row fetch Url")
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        async function movieData(){
            const requests = await axios.get(fetchUrl)
            setMovies(requests.data.results)
            return requests
        }
        movieData()
    },[fetchUrl])
    // console.log(movies,"row movie")
  return (
    <div className='row'>
        <h2 className='row_title'>
            {title}
        </h2>
        <div className="row_posters">
            {movies.map((movie)=>(
                <img src={`${baseURl}${isBigRow?movie.backdrop_path:movie.poster_path}`} alt={movie.title} className={`poster ${isBigRow && "larger_poster"}`} />
            ))}
        </div>

    </div>
  )
}

export default Row
