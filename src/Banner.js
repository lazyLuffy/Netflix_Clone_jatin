import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import requests from './Request'
import axios from './axios'
import './banner.css'

function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const request =  await axios.get(requests.fetchNetflixOriginals) 
            console.log(request,"this is from axios")
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
                )
                return request;
            }
            console.log(movie,"this is emypty movie")
        fetchData()
    },[])
    const trunk = (string,n)=>{
        return (string?.length>n?string.substr(0,n-1)+"...":string)
    }
  return (
    <header className='banner' style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundSize:"cover",
        backgroundPosition:"center center",  
    }}>
        <div className="banner_content">
            <h1 className="banner_title">{movie?.name || movie?.orginal_name || movie?.title}</h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">
                {trunk(movie.overview,100)}</h1>
        </div>
        <div className="banner--fadeBottom"/>
    </header>
  )
}

export default Banner