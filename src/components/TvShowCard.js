import React from 'react';
import './TvShowCard.css';
const tvShowCard = (props) => {
  return (
    <div className='card'>
     <img src={props.image} alt='poster'/>
     <div className='overlay'>
        <div className='overlay-title'> {props.name}</div>
        <div className='overlay-rating'>{props.rating}</div>
     </div>
    </div>
  );
}

export default tvShowCard;