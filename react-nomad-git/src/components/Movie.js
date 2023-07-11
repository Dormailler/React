import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Moive(){
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([]);
    const getMovies = async () =>{
        // const response = await fetch(
        //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
        // const json = await response.json();
        const json = await (
            await fetch( `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year`)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };    
        
    useEffect(()=>{
        getMovies();
    },[]);

    return( 
    <div className={styles.container}>
        {loading? (
            <div className={styles.loader}>
                <h1>로딩중...</h1>
            </div>
        ) : (
        <div className={styles.movies}>
            {movies.map((movie) => 
            <div key={movie.id}>
                <img src={movie.medium_cover_image} alt={movie.title} className={styles.movie__img}/>
                <h2 className={styles.movie__title}>    
                    <Link to={`/movie/${movie.id}`}> {movie.title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{movie.year}</h3>
                <p>{movie.summary.length > 235 ? `${movie.summary.slice(0, 235)}...` : movie.summary}</p>
                <ul className={styles.movie__genres}>
                    {movie.genres.map(g => <li key={g}>{g}</li>)}
                </ul>
            </div>)}
        </div>)}
    </div>
    );
}

export default Moive;