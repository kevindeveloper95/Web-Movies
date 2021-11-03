import React from 'react'
import { useParams } from 'react-router'
import styles from '../MoviesDetails/MoviesDetails.module.css'
import { useEffect, useState } from 'react'
import { Get } from '../httpClient'
import SpinLoading from '../SpinLoading/SpinLoading'

const MovieDetails = () => {
    const [movie, setmovie] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const {movieId} = useParams()
    
    useEffect(() => {
        setIsLoading(true)
        Get("/movie/" + movieId).then((data) => {
          setmovie(data);
          setIsLoading(false)
        });
      }, [movieId]);
    
      if(isLoading){
        return <SpinLoading/>
      }

      

    const ShowImage = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} 
            src={ShowImage}
            alt={movie.title}
             />
            <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem}>
               <strong>Title:</strong> {movie.title}
            </p>
             <p><strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(", ")}</p>
            <p><strong>Description:</strong> {movie.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetails
