import { useEffect, useState } from 'react';
import {moviesData} from '../../data/moviesData';
import MovieCard from './MovieCard';

const MovieList = () => {

    const [movies, setMovie] = useState([]);

    useEffect(() => {
        getMovies()

    }, []);

    const getMovies = () => {
        const getMoviesPromise = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(moviesData)
            },2000);
        })

        getMoviesPromise.then(data => { 
            setMovie(data)
    })

    }


    
  return (
    <div>
        {movies.map(m => <MovieCard key={m.id} movies={m}/>)}
    </div>
  )
}
export default MovieList