import React,{useState,useEffect} from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';
import FlipMove from "react-flip-move";


function Results({SelectedOption}) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      
        async function fetchData(){

            const request = await axios.get(SelectedOption);
            
            console.log(request);

            setMovies(request.data.results);
            
            return request;

        }

            fetchData();

    }, [SelectedOption])




    return (
        <div className="results">

            <FlipMove > 
                
            {

                 movies.map((movie)=>(

                < VideoCard movie={movie} />


            ))
            }
                
                </FlipMove>
            
            

            

        </div>
    )
}

export default Results
