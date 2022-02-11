import React from 'react';
import Link from 'react-router-dom';

export default function SingleMoSho({ movieShow }) {
  return (
    <Link to={`/movies-shows/${movieShow.id}`}>
      <div className='single-movie-show'>
        <h3>{movieShow.title}</h3>
        <p>Directed by {movieShow.director}, is a {movieShow.type} released in {movieShow.year_released} that falls in the genre {movieShow.genre}.</p>
      </div>
    </Link>
  );
}
