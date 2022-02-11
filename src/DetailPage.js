import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getSingleMovSho } from './services/fetch-utils';

export default function DetailPage() {
  const [movieShow, setMovieShow] = useState([]);
  const match = useRouteMatch();

  useEffect(() => {
    async function fetch() {
      const singleMovSho = await getSingleMovSho(match.params.id);
      setMovieShow(singleMovSho);
    }
    fetch();
  }, [match]);

  return (
    <div className='detail'>
      <h3>{movieShow.title}</h3>
      <p>Directed by {movieShow.director} is a {movieShow.type} released in {movieShow.year_released} that falls in the genre of {movieShow.genre}</p>
    </div>
  );
}
