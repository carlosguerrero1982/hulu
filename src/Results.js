import React,{useState,useEffect} from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';



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
            
            {

                movies.map((movie)=>(

                    < VideoCard movie={movie} />
        

                ))
            }

            

        </div>
    )
}

export default Results
