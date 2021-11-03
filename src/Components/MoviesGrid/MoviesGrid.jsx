import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import MovieCard from '../MoviesCard/MovieCard'
import styles from '../MoviesGrid/MoviesGrid.module.css'
import { useEffect  } from 'react'
import { Get } from '../httpClient'
import SpinLoading from '../SpinLoading/SpinLoading'






export const MoviesGrid = ({search}) => {
     
 const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    Get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);

      if(isLoading){
       return <SpinLoading/>
      }

   
    return (
        <Fragment>
            <ul className={styles.moviesGrid}>
                {movies.map((movie)=>{
                 return <MovieCard key={movie.id} movie={movie}/>
                 
                })}
            </ul>
            
        </Fragment>
    )
}

export default MoviesGrid
