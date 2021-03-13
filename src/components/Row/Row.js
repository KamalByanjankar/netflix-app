import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../../context/axios'

function Row({title, fetchUrl, isLargeRow=false}) {
    const [movies, setMovies] = useState([])

    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchMovies(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        
        fetchMovies()
    }, [fetchUrl])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map(movie => {
                        return(
                            <img 
                                key={movie.id}
                                src={`${base_url}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
                                alt={movie?.name}
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Row
