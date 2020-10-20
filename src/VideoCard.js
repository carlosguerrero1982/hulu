import React from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';

function VideoCard({movie}) {

    const base_url = "https://image.tmdb.org/t/p/original/";


    return (
        <div className="videocard">

        

        <img src={`${base_url}${movie.backdrop_path || movie.poster_path }`}
        
        alt="movie poster"
        
        />

        <TextTruncate

            line={2}
            element="p"
            truncateText="…"
            
            text={movie.overview}
            
        />

        
         <h2>{movie.original_title || movie.original_name}</h2>   

        

         <p className="videocard_stats">
             
           {movie.media_type && `${movie.media_type} .`} 
           {movie.release_date || movie.first_air_date}         

         <ThumbUpSharpIcon /> {movie.vote_count}
         
         </p>


        </div>
    )
}

export default VideoCard
