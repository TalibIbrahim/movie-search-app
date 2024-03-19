import './App.css';
import React,{useState} from 'react';
import NavBar from './components/UI/NavBar';
import SearchInput from './components/UI/SearhInput';
import Container from './components/UI/Container';
import TvShowList from './components/TvShowList';
import {TailSpin} from 'react-loader-spinner';

function App() {

const [tvShows, setTvShows] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error,setError] = useState(null);
const [searchInput, setSearchInput] = useState('');

  const searchHandler = (searchInput) => {
    setSearchInput(searchInput);
    fetchMoviesHandler(searchInput);

  }

  async function fetchMoviesHandler(searchInput){
    setIsLoading(true);
    setError(null);
    try{
      await new Promise((resolve) => setTimeout(resolve, 1250));
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`);

    if(!response.ok){
      throw new Error('Something went wrong');
    }

    const data= await response.json();
  

    const tvShowData = data.map((tvShowData) => {
      if (
        !tvShowData.show.id ||
        !tvShowData.show.name ||
        !tvShowData.show.image ||
        !tvShowData.show.rating.average
      ) {
        return null; // check if all fields exist
      }
    
      return {
        id: tvShowData.show.id,
        name: tvShowData.show.name,
        image: tvShowData.show.image.medium,
        rating: tvShowData.show.rating.average,
      };
    }).filter((tvShow) => tvShow !== null); // filter out empty data. (Filter tvShows where tvShow is not equal to null)

    setTvShows(tvShowData);
    }
    catch(error){
      setError(error.message);
    }
    setIsLoading(false);
  }

  let content;
  if(tvShows.length>0){
    content = <TvShowList tvShows={tvShows} searchInput={searchInput} />
  }
  if(tvShows.length===0 && !isLoading && !error){
    content = <p className='text-white font-medium ml-5 text-xl'>No TV Shows Found.</p>}
  if(error){
    content = <p>{error}</p>
  }
  if(isLoading){
   content= 
   <div className="flex justify-center items-center mt-40">
   <TailSpin
   visible={true}
   height="120"
   width="120"
   color="#E50914"
   ariaLabel="tail-spin-loading"
   radius="0"
   wrapperStyle={{}}
   wrapperClass=""
   />
   </div>
  }
  
  return (
    <Container>
      <NavBar />
      <SearchInput onSearch={searchHandler}  />
          {content}
    </Container>
     
  );
}

export default App;
