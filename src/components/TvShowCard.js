import React from 'react';
import './TvShowCard.css';
const tvShowCard = (props) => {
  return (
    <div className='card'>
     <img src={props.image} alt='poster'/>
     <div className='overlay'>
        <div className='overlay-title'> <p>{props.name}</p></div>
        <div className='overlay-rating'><p>{`Rating: ${props.rating}`}</p></div>
     </div>
    </div>
  );
}

export default tvShowCard;