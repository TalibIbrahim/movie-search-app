import React from 'react';
import './TvShowList.css';
import TvShowCard from './TvShowCard';
const TvShowList = (props) => {
  return (
    
    <div>
      <p className='text-white font-medium ml-5 text-xl'>{`Search Results for: ${props.searchInput}`}</p>

    <div className='bg-neutral-800 grid-display mr-3'>
    {props.tvShows.map((tvShow) => (
        <TvShowCard
        name={tvShow.name}
        image={tvShow.image}
        rating={tvShow.rating}
        key={tvShow.id}
        />
    ))}
    </div>
    </div>
  );
}

export default TvShowList;
