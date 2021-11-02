import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import MovieCard from '../MoviesCard/MovieCard'
import styles from '../MoviesGrid/MoviesGrid.module.css'
import { useEffect  } from 'react'
import { Get } from '../httpClient'


const MoviesGrid = () => {
     
    const [Movies, setMovies] = useState([])
    useEffect(() => {
        Get("/discover/movie").then((data) => {
          setMovies(data.results);
        });
      }, []);

   
    return (
        <Fragment>
            <ul className={styles.moviesGrid}>
                {Movies.map((movie)=>{
                 return <MovieCard key={movie.id} movie={movie}/>
                 
                })}
            </ul>
            
        </Fragment>
    )
}

export default MoviesGrid
