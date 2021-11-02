import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import styles from '../MoviesCard/MovieCard.module.css'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {

const ShowImages = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;

    return (
        <Fragment>
            <li className={styles.movieCard}>
                <Link to={'/movies/' + movie.id}>
                <img className={styles.movieImage}
                src={ShowImages}
                alt={movie.title}
                />
                <div>{movie.title}</div>
                </Link>
            </li>
            
        </Fragment>
    )
}

export default MovieCard
