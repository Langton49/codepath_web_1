import React from 'react';
import '../styles/card.css';

const Card = ({trailerLink, imgSrc, title, content}) => {
    
  return (
    <div className="card">
    <a href={trailerLink}><img src={imgSrc} alt={title} /></a>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;