import React from 'react';
import './TvShowList.css';
import TvShowCard from './TvShowCard';
const TvShowList = (props) => {
  return (
    <div className='bg-neutral-800 grid-display'>
    {props.tvShows.map((tvShow) => (
        <TvShowCard
        name={tvShow.name}
        image={tvShow.image}
        rating={tvShow.rating}
        key={tvShow.id}
        />
    ))}
    </div>
  );
}

export default TvShowList;
