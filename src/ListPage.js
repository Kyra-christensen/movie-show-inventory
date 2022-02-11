import React, { useState, useEffect } from 'react';
import { getAllMovSho } from './services/fetch-utils';
import SingleMoSho from './SingleMoSho';

export default function ListPage() {
  const [moviesShows, setMoviesShows] = useState([]);

  useEffect(() => {
    async function fetch() {
      const data = await getAllMovSho();
      setMoviesShows(data);
    }
    fetch();
  }, []);

  return (
    <div className="movie-show-list">
      {
        moviesShows.map((movieShow, i) => <SingleMoSho key={`${movieShow.title}=${i}`} movieShow={movieShow} />)
      }
    </div>
  );
}
