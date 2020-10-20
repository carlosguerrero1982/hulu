import React,{useState} from 'react';
import Header from'./Header';
import './App.css';
import Nav from'./Nav';
import Results from './Results';
import requests from './requests';

function App() {

  const [SelectedOption, setSelectedOption] = useState(requests.fetchTopRated);


  return (
    <div className="app">
    

    <Header />

    <Nav setSelectedOption={setSelectedOption} />

    <Results SelectedOption={SelectedOption} />




    </div>
  );
}

export default App;
