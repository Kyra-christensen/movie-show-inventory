import React from 'react';
import { Link } from 'react-router-dom';

export default function SingleMoSho({ movieShow }) {
  return (
    <Link to={`/movies-shows/${movieShow.id}`}>
      <div className='single-movie-show'>
        <h3>{movieShow.title}</h3>
        <p>Directed by {movieShow.director}</p>
      </div>
    </Link>
  );
}
