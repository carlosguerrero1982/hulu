import React from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';


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


        
         <h2>{movie.original_title}</h2>   
         <p>Likes</p>


        </div>
    )
}

export default VideoCard
