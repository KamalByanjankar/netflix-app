import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../context/axios'
import requests from '../../context/Requests'

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchMovies(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[Math.floor(Math.random()*request.data.results.length - 1)]
            )
            return request
        }
        fetchMovies()
    }, [])

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n-1) + '...' : string    
    }

    return (
        <div 
            className="banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}    
        >
            <div className="banner__contents">
                <h1
                    className="banner__title"
                >
                    {movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {
                        truncate(movie?.overview, 200)
                    }
                </h1>
            </div>

            <div className="banner--fadeBottom" />
        </div>
    )
}

export default Banner
